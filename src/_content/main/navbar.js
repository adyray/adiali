import '../../_css/Navbar.css'
import React from 'react'
import ego from '../../_img/logo-bw.png'
import { gsap } from "gsap";
import { Link } from "react-router-dom"
import { useState, useRef } from "react"
import emailjs from "emailjs-com"



function Navbar() {
  const [on, setOn] = useState(true)
  const [sick, setSickmade] = useState(true)
  const [success, setSuccess] = useState(null)
  const [enquiryType, setEnquiryType] = useState("General")

window.addEventListener("scroll", () => {

  const logo = document.querySelector(".egoLogo")
  const icon = document.querySelector(".logo-main")


  if(window.scrollY){

    gsap.to(logo, .3, {width:25, padding:0})
    gsap.to(icon, .3, {padding:9, marginLeft:14})
  }else{
    gsap.to(logo, .3, {width:40})
    gsap.to(icon, .3, {padding:20, marginLeft:0})

  }

})

const menu = (oppo) => {
  const open = document.querySelector(".openMenu")
  if(oppo){
    setOn(false)
  open.style.display = "block"
  }else{
    setOn(true)
  open.style.display = "none"
  }
}


const toggleContact = (val) => {
  const vision = document.querySelector(".getInTouch_container")

  if(val){
    vision.style.display = "flex"
    setSickmade(!val)
  }else{
    vision.style.display = "none"
    setSickmade(!val)
  }
}


const formC = useRef();

  const submitForm = (e) => {
      e.preventDefault();
    emailjs.sendForm(`service_xzl7zcc`, "template_0xo631r", formC.current, `user_oc3vLm5WZykIUMPy6jcxc`)
    .then(() => {
        setSuccess(true)
    }, () => {
        setSuccess(false)
    });
  
}

const enquiry = (e) => {

document.querySelector(".active-enquiry").classList.remove("active-enquiry")
e.target.classList.add("active-enquiry")

setEnquiryType(e.target.innerText)
}


  return (
    <>
    <div className="nb">
      <div className="logo-main">
      <Link to="/">
      <img className="egoLogo" width="40px" src={ego} alt="ego-logo" />
      </Link>
        
        </div>

      <ul className="nb_li"> 
      <li onClick={() => toggleContact(sick)} className="cta_contact">Get in touch</li> 
      <Link to="/work">
      <li>Work</li> 
      </Link>
      <Link to="/about">
      <li >About</li>
      </Link>
      <Link to="/">
      <li className="logoText"><button>Adnan Ali</button></li>
      </Link>
      </ul>

      <div onClick={() => menu(on)} className="menu">
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>


    <div className="openMenu">
      <ul>
      <li className="getintouchbutns" onClick={() => toggleContact(sick)}>Get in touch</li> 
      <Link to="/work">
      <li>Work</li> 
      </Link>
      <Link to="/about">
      <li >About</li>
      </Link>
      <Link to="/">
      <li className="logoText"><button>Adnan Ali</button></li>
      </Link>
        </ul>
    </div>


    <div className="getInTouch_container">
          <div className="getInTouch">
            <span onClick={() => toggleContact(sick)}>Close</span>

             {
               (success === null) ? 
               <>
             <h2 className="formTitle">Get In Touch</h2>
               <form className="contact_form" action="#" ref={formC} onSubmit={submitForm}>
             <label>Name</label>
             <input name="from_name" type="text" placeholder="Name" required></input>
             <label>Email</label>
             <input name="email" type="email" placeholder="Email" required></input>
             <label>Business</label>
             <input name="business" type="business" placeholder="Business (optional)"></input>
             <label>Reason for Enquiry</label>
             <ul  className="enquiry-dropdown">
               <li className="selectOption active-enquiry" onClick={(e) => enquiry(e)}>General</li>
               <li className="selectOption" onClick={(e) => enquiry(e)}>Quote</li>
               <input style={{display:"none !important"}} name="enquiryType" value={enquiryType} onChange={(value) => setEnquiryType(value)}/>
              </ul>
             <label>Message</label>
             <textarea name="message" placeholder="Type a message" min="10" maxLength="150" required></textarea>
             <button>Send</button>
            </form>
            </>
            : (success) ? <h2 className="formTitle">Thanks for your message</h2> : <h2 className="formTitle">Oops there's been a problem</h2>
             } 
          </div>
      </div>
    </>

  );
}

export default Navbar;
