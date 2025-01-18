import React, { useEffect, useState } from 'react'
import './index.css'
import { Toaster, toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function ArticleDetails() {
  const [commit, setCommit] = useState("")
  const [comments, setComments] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [article, setArticle] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const articlesData = localStorage.getItem("articles")
    if (articlesData) {
      const parsedArticles = JSON.parse(articlesData)
      setArticle(parsedArticles[id])
    }
  }, [id])

  if (!article) {
    return <p className='loading'>Loading...</p>
  }

  useEffect(() => {
    const commits = localStorage.getItem("comments")
    if (commits) {
      setComments(JSON.parse(commits))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments))
  }, [comments])

  function validate() {
    if (!commit) {
      alert("Izoh uchun biror narsa yozishingiz kerak!")
      return false
    } else if (commit.length < 4) {
      alert("Izoh eng kamida 4 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    return true
  }

  function handleAddCommit(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    if (editIndex !== null) {
      const updatedComments = comments.map((comment, index) =>
        index === editIndex ? { ...comment, text: commit } : comment
      );
      setComments(updatedComments);
      setEditIndex(null);
    } else {
      const newComment = {
        text: commit,
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]);
    }

    toast.success("Comment muvaffaqiyatli qo'shildi!")
    setCommit("");
  }


  function handleDeleteComment(index) {
    const deleteComment = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (deleteComment) {
      const deleteCommit = comments.filter((_, i) => i !== index);
      setComments(deleteCommit)
      toast.error("Comment o'chirildi!")
    }
  }

  function handleEditComment(index) {
    const commentToEdit = comments[index]
    setCommit(commentToEdit.text)
    setEditIndex(index)
  }

  return (
    <div className='container-articleId'>
      <h1 className="title">Article About</h1>
      <div className="container-articles">
        <p><strong>About:</strong>{"  "} {article.about}</p>
        <p><strong>Author:</strong>{"  "} {article.author}</p>
        <p><strong>Describtion:</strong>{"  "} {article.description}</p>
        <p><strong>Information:</strong>{"  "} {article.information}</p>
      </div>

      <div className="comments">
        <form className='form-commit'>
          <label htmlFor="commit">Biror bir comment yozishingiz mumkin!</label>
          <input value={commit} onChange={(e) => { setCommit(e.target.value) }} type="text" name="commit" id="commit" placeholder='Enter your comment...' />
          <button onClick={handleAddCommit} className="btnCommit">Add Comment</button>
          <Toaster />
        </form>

        <div className="commits">
          {
            comments.length > 0 && comments.map((comment, index) => (
              <div key={index} className="commit">
                <p>{comment.text}</p>
                <div className="right">
                  <div className="btns-commit">
                    <button onClick={() => handleEditComment(index)} className='btn-one'>Edit</button>
                    <Toaster />
                    <button onClick={() => handleDeleteComment(index)} className='btn-two'>Delete</button>
                  </div>
                  <div className="time">
                    <h4>{comment.time}</h4>
                    <h4>{comment.date}</h4>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails
