import React from 'react'
import './index.css'
import ButtonIcon from '../../assets/images/more.svg'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='container-home'>
      <h1 className='articles-title'>Articles</h1>

      <div className="articles">
        <div className="article">
          <h2 className="title-about">Alisher Navoiy haqida</h2>
          <h2 className='author'>Alisher Navoiy</h2>
          <p className="describtion-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio earum alias cumque nobis id!</p>
          <p className='describtion'>Alisher Navoiy ((chigʻatoycha: علیشیر نوایی‎[1]; forscha: نظام‌الدین علی‌شیر نوایی;) 9-fevral 1441-yildan 3-yanvar 1501-yil) — Temuriylar davridagi turkiy xalqlarning shoiri[2], mutafakkir va davlat arbobi[3][4][5][6]. Gʻarbda Chigʻatoy adabiyotining buyuk vakili deb qaraladi.Tarixchi Ali Yazdiy nazariga tushgan, shoir Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469-yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan.</p>
          <NavLink className="more" to="/articleDetails">
            <h4>Batafsil</h4>
            <img src={ButtonIcon} alt="" />
          </NavLink>
        </div>

        <div className="article">
          <h2 className="title-about">Alisher Navoiy haqida</h2>
          <h2 className='author'>Alisher Navoiy</h2>
          <p className="describtion-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio earum alias cumque nobis id!</p>
          <p className='describtion'>Alisher Navoiy ((chigʻatoycha: علیشیر نوایی‎[1]; forscha: نظام‌الدین علی‌شیر نوایی;) 9-fevral 1441-yildan 3-yanvar 1501-yil) — Temuriylar davridagi turkiy xalqlarning shoiri[2], mutafakkir va davlat arbobi[3][4][5][6]. Gʻarbda Chigʻatoy adabiyotining buyuk vakili deb qaraladi.Tarixchi Ali Yazdiy nazariga tushgan, shoir Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469-yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan.</p>
          <NavLink className="more" to="/articleDetails">
            <h4>Batafsil</h4>
            <img src={ButtonIcon} alt="" />
          </NavLink>
        </div>

        <div className="article">
          <h2 className="title-about">Alisher Navoiy haqida</h2>
          <h2 className='author'>Alisher Navoiy</h2>
          <p className="describtion-one">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio earum alias cumque nobis id!</p>
          <p className='describtion'>Alisher Navoiy ((chigʻatoycha: علیشیر نوایی‎[1]; forscha: نظام‌الدین علی‌شیر نوایی;) 9-fevral 1441-yildan 3-yanvar 1501-yil) — Temuriylar davridagi turkiy xalqlarning shoiri[2], mutafakkir va davlat arbobi[3][4][5][6]. Gʻarbda Chigʻatoy adabiyotining buyuk vakili deb qaraladi.Tarixchi Ali Yazdiy nazariga tushgan, shoir Lutfiy yosh shoir isteʼdodiga yuqori baho bergan, Kamol Turbatiy eʼtirofini qozongan. Sayyid Hasan Ardasher, Pahlavon Muhammad kabi ustozlardan taʼlim olgan, Abdurahmon Jomiy bilan ijodiy hamkorlikda boʻlgan. Navoiy 1469-yilgacha temuriylar orasidagi ichki nizolar sababli Hirotdan yiroqroqda yashagan.</p>
          <NavLink className="more" to="/articleDetails">
            <h4>Batafsil</h4>
            <img src={ButtonIcon} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home
