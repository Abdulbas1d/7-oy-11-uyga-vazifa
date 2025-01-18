import React, { useEffect, useState } from 'react'
import './index.css'
import ButtonIcon from '../../assets/images/more.svg'
import { NavLink } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

function Home() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const articlesData = localStorage.getItem("articles")
    if (articlesData) {
      setDatas(JSON.parse(articlesData))
    }
  }, [])

  function handleDeleteArticle(event, index) {
    event.preventDefault()

    const deleteArticle = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (deleteArticle) {
      const deleteArticleIndex = datas.filter((_, i) => i !== index)
      setDatas(deleteArticleIndex)
      localStorage.setItem("articles", JSON.stringify(deleteArticleIndex))
      toast.error("Article o'chirildi!")
    }
  }

  return (
    <div className='container-home'>
      <h1 className='articles-title'>Articles</h1>

      <div className="articles">
        {datas.length > 0 ? (
          datas.map((data, index) => (
            <div key={index} className="article">
              <h2 className="title-about">{data.about}</h2>
              <h2 className="author">{data.author}</h2>
              <p className="description-one">{data.description}</p>
              <p className="description">{data.information}</p>
              <NavLink className="more" to={`/articleDetails/${index}`}>
                <h4>Batafsil</h4>
                <img src={ButtonIcon} alt="more" />
              </NavLink>

              <button onClick={() => handleDeleteArticle(event, index)} className='button-one'>Delete</button>
              <Toaster />
            </div>
          ))
        ) : (
          <p className="no-article">Hozircha hech qanday maqola mavjud emas.</p>
        )}
      </div>
    </div>
  )
}

export default Home
