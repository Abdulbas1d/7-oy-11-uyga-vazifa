import React, { useState } from 'react'
import './index.css'

function CreateArticle() {
  const [about, setAbout] = useState("")
  const [author, setAuthor] = useState("")
  const [describtion, setDescribtion] = useState("")
  const [information, setInformation] = useState("")

  function validate() {
    if (!about) {
      alert("Article mavzusini kiritishingiz kerak!")
      return false
    } else if (about.length > 5) {
      alert("Article mavzusi eng kamida 5 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!author) {
      alert("Article Muallifini ismini kiritishingiz kerak!")
      return false
    } else if (author.length > 3) {
      alert("Article Muallifini ismi eng kamida 3 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!describtion) {
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
  }

  return (
    <div className='container-createArticle'>
      <h1 className='create-title'>Create Article</h1>
      <form className="form-createArticle">
        <label htmlFor="about">Article mavzusi nima?</label>
        <input value={about} onChange={(e) => {setAbout(e.target.value)}} id='about' name='about' type="text" placeholder='Enter article name...' />

        <label htmlFor="author">Article Muallifi Ismi</label>
        <input value={author} onChange={(e) => {setAuthor(e.target.value)}} id='author' name='author' type="text" placeholder='Enter author name...' />

        <label htmlFor="decribtion">Qisqacha ta'rif bering!</label>
        <textarea value={describtion} onChange={(e) => {setDescribtion(e.target.value)}} name="decribtion" id="decribtion" placeholder='Enter decribtion for article...'></textarea>

        <label htmlFor="infor">Article haqida informatsiya bering!</label>
        <textarea value={information} onChange={(e) => {setInformation(e.target.value)}} name="infor" id="infor" placeholder='Enter information for article...'></textarea>

        <button onClick={handleAddArticle} className="btn-createArticle">Add Article</button>
      </form>
    </div>
  )
}

export default CreateArticle
