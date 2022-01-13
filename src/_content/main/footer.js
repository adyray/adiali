import '../../_css/Footer.css'
import React from 'react'
// import facebook from '../../_img/face.png'
// import insta from '../../_img/insta.png'
// import twitter from '../../_img/twitter.png'
// import li from '../../_img/li.png'
import logo_bw from '../../_img/logo-bw.png'

const runThisForContact = () => {
  const vision = document.querySelector(".getInTouch_container")

  vision.style.display = "flex"
 }


function footer() {
  return (
    <>
     <div className="footerContainer">
     <div className="footerContent">
       <h1 className="left-f-title flashyTitles">Site Navigation</h1>
      <ul className="left">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
        <a href="/work">Work</a>
        </li>
        <li onClick={runThisForContact} style={{cursor : "pointer"}}>
        Contact
        </li>
        </ul>
      </div>
      <img src={logo_bw} width="50px" alt="img"/>
      <br/>
      <p style={{color:"white"}}> &copy; 2022 Adnan Ali </p>
     </div>
    </>

  )
}

export default footer;