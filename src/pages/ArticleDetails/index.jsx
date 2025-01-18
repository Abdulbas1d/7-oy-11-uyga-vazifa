import React, { useEffect, useState } from 'react'
import './index.css'

function ArticleDetails() {
  const [commit, setCommit] = useState("")
  const [comments, setComments] = useState([])
  const [editIndex, setEditIndex] = useState(null)

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

    setCommit("");
  }


  function handleDeleteComment(index) {
    const deleteComment = confirm("Rostdan ham o'chirmoqchimisiz?")
    if (deleteComment) {
      const deleteCommit = comments.filter((_, i) => i !== index);
      setComments(deleteCommit)
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
        <p><strong>About:</strong>{"  "} Alisher Navoiy haqida</p>
        <p><strong>Author:</strong>{"  "} Alisher Navoiy</p>
        <p><strong>Describtion:</strong>{"  "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio earum alias cumque nobis id!</p>
        <p><strong>Information:</strong>{"  "} Alisher Navoiy ((chigʻatoycha: علیشیر نوایی‎[1]; forscha: نظام‌الدین علی‌شیر نوایی;) 9-fevral 1441-yildan 3-yanvar 1501-yil) — Temuriylar davridagi turkiy xalqlarning shoiri[2], mutafakkir va davlat arbobi[3][4][5][6]. Gʻarbda Chigʻatoy adabiyotining buyuk vakili deb qaraladi.Tarixchi Ali Yazdiy nazariga tushgan, shoir Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469-yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan.</p>
      </div>

      <div className="comments">
        <form className='form-commit'>
          <label htmlFor="commit">Biror bir comment yozishingiz mumkin!</label>
          <input value={commit} onChange={(e) => { setCommit(e.target.value) }} type="text" name="commit" id="commit" placeholder='Enter your comment...' />
          <button onClick={handleAddCommit} className="btnCommit">Add Comment</button>
        </form>

        <div className="commits">
          {
            comments.length > 0 && comments.map((comment, index) => (
              <div key={index} className="commit">
                <p>{comment.text}</p>
                <div className="right">
                  <div className="btns-commit">
                    <button onClick={() => handleEditComment(index)} className='btn-one'>Edit</button>
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
