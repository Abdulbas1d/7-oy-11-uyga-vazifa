import React, { useEffect, useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import MainLayout from './Layouts/MainLayout';
import AuthLayout from './Layouts/AuthLayout';
import CreateArticle from './pages/CreateArticle';
import ArticleDetails from './pages/ArticleDetails';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('token'); 
    if (location.state?.token) {
      const newToken = location.state.token;
      setToken(newToken);
      localStorage.setItem('token', newToken);
    } else if (savedToken) {
      navigate('/login');
    }
  }, [location.state, navigate]);

  function PrivateRoute({ isAuth, children }) {
    return isAuth ? children : <Navigate to="/login" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route index element={<PrivateRoute isAuth={!!token}><MainLayout><Home /></MainLayout></PrivateRoute>}/>
        <Route path="/createArticle" element = {<MainLayout><CreateArticle /></MainLayout>} />
        <Route path="/articleDetails/:id" element = {<MainLayout><ArticleDetails /></MainLayout>} />
      </Routes>
    </div>
  );
}

export default App;
