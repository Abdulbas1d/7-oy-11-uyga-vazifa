import React, { useEffect, useState } from 'react'
import './index.css'
import { Toaster, toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'
import ButtonIcon from '../../assets/images/more.svg'

function CreateArticle() {
  const [about, setAbout] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [information, setInformation] = useState("")
  const [datas, setDatas] = useState([])
  const [editArticle, setEditArticle] = useState(null)

  useEffect(() => {
    const articlesDatas = localStorage.getItem("articles")
    if (articlesDatas) {
      setDatas(JSON.parse(articlesDatas))
    }
  }, [])

  function validate() {
    if (!about) {
      alert("Article mavzusini kiritishingiz kerak!")
      return false
    }

    if (about.length < 5) {
      alert("Article mavzusi eng kamida 5 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!author) {
      alert("Article Muallifini ismini kiritishingiz kerak!")
      return false
    }

    if (author.length < 3) {
      alert("Article Muallifini ismi eng kamida 3 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!description) {
      alert("Article ga qisqacha ta'rif berishingiz kerak!")
      return false
    }

    if (!information) {
      alert("Article ni informatsiyasini ham kiritishingiz kerak!")
      return false
    }

    return true
  }

  function handleAddArticle(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    let newData = {
      about: about,
      author: author,
      description: description,
      information: information
    }

    if (editArticle !== null) {
      const editDatas = datas.map((data, index) =>
        index === editArticle ? newData : data
      )

      setDatas(editDatas)
      localStorage.setItem("articles", JSON.stringify(editDatas))
      toast.success("Article Edit bo'lib qayta qo'shildi!")
      setEditArticle(null)
    } else {
      const updatedDatas = [...datas, newData]
      setDatas(updatedDatas)
      localStorage.setItem("articles", JSON.stringify(updatedDatas))
      toast.success("Article Muvaffaqiyatli qo'shildi!")
    }

    setAbout("")
    setAuthor("")
    setDescription("")
    setInformation("")
  }

  function handleDeleteArticleTwo(event, index) {
    event.preventDefault()

    const deleteArticle = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (deleteArticle) {
      const deleteArticleIndex = datas.filter((_, i) => i !== index)
      setDatas(deleteArticleIndex)
      localStorage.setItem("articles", JSON.stringify(deleteArticleIndex))
      toast.error("Article o'chirildi!")
    }
  }

  function handleEditArticleTwo(index) {
    const articleToEdit = datas[index]
    setEditArticle(index)
    setAbout(articleToEdit.about)
    setAuthor(articleToEdit.author)
    setDescription(articleToEdit.description)
    setInformation(articleToEdit.information)
  }

  return (
    <div className='container-createArticle'>
      <h1 className='create-title'>Create Article</h1>
      <form className="form-createArticle">
        <label htmlFor="about">Article mavzusi nima?</label>
        <input value={about} onChange={(e) => { setAbout(e.target.value) }} id='about' name='about' type="text" placeholder='Enter article name...' />

        <label htmlFor="author">Article Muallifi Ismi</label>
        <input value={author} onChange={(e) => { setAuthor(e.target.value) }} id='author' name='author' type="text" placeholder='Enter author name...' />

        <label htmlFor="description">Qisqacha ta'rif bering!</label>
        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} name="description" id="description" placeholder='Enter decribtion for article...'></textarea>

        <label htmlFor="infor">Article haqida informatsiya bering!</label>
        <textarea value={information} onChange={(e) => { setInformation(e.target.value) }} name="infor" id="infor" placeholder='Enter information for article...'></textarea>

        <button onClick={handleAddArticle} className="btn-createArticle">
          {editArticle !== null ? "Save changes" : "Add Article"}
        </button>
        <Toaster />
      </form>

      <div className="articles">
        {datas.length > 0 ? (
          datas.map((data, index) => (
            <div key={index} className="article">
              <h2 className="title-about">{data.about}</h2>
              <h2 className="author">{data.author}</h2>
              <p className="description-one">{data.description}</p>
              <p className="description-two">{data.information}</p>
              <NavLink className="more" to={`/articleDetails/${index}`}>
                <h4>Batafsil</h4>
                <img src={ButtonIcon} alt="" />
              </NavLink>

              <div className="buttons">
                <button onClick={() => handleEditArticleTwo(index)} className="button-two">Edit</button>
                <button onClick={() => handleDeleteArticleTwo(event, index)} className="button">Delete</button>
                <Toaster />
              </div>
            </div>
          ))
        ) : (
          <p className='no-article'>Hozircha hech qanday maqola mavjud emas.</p>
        )}
      </div>

    </div>
  )
}

export default CreateArticle
