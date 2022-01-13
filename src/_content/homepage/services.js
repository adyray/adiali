import React, { useState } from 'react'
import '../../_css/Services.css'
import gsap from 'gsap'

function Services() {
  const [open, isOpen] = useState(false);
  const openServicesMenu = (bool) => {
    let arrow = document.querySelector(".iconArrow")
    let expandable = document.querySelectorAll(".list-types")
    let service = document.querySelectorAll(".servicesTabs")
    // let bar = document.querySelector(".bar")
    // console.log(document.body.clientWidth)
    if(document.body.clientWidth > 600){
      if(!open){
        arrow.classList.remove("downArrow")
        arrow.classList.add("upArrow")
        gsap.to(expandable, 1, {autoAlpha:1})
        gsap.to(service, 1, {height:180, autoAlpha:1})
        // gsap.to(expandable, 1, {height:0, autoAlpha:0})
        isOpen(true)
      }else{
        arrow.classList.remove("upArrow")
        arrow.classList.add("downArrow")
        
        // gsap.to(expandable, 1, {height:180, autoAlpha:1})
        gsap.to(expandable, 1, {autoAlpha:0})
        gsap.to(service, 1, {height:30})
        isOpen(false)
      }
    }else{
      if(document.body.clientWidth < 600){
        if(!open){
          arrow.classList.remove("downArrow")
          arrow.classList.add("upArrow")
            gsap.to(expandable, 1, {height:150, autoAlpha:1})
          isOpen(true)
        }else{
          arrow.classList.remove("upArrow")
          arrow.classList.add("downArrow")
          gsap.to(expandable, 1, {height:0, autoAlpha:0})
          isOpen(false)
        }
    }
  }
}

 

  window.addEventListener("resize", () => {
    let arrow = document.querySelector(".iconArrow")
    let expandable = document.querySelectorAll(".list-types")
    let service = document.querySelectorAll(".servicesTabs")
    if(!open){
    if(document.body.clientWidth > 600){
        arrow.classList.remove("upArrow")
        arrow.classList.add("downArrow")
        gsap.to(expandable, 1, {height:0, autoAlpha:0})
      gsap.to(service, 1, {height:30})
        isOpen(true)
      
    }
    else{
      // console.log(open)
      // arrow.classList.remove("upArrow")
      // arrow.classList.add("downArrow")
      // gsap.to(expandable, 1, {height:0, autoAlpha:0})
      gsap.to(service, 1, {height:"fit-content"})
      isOpen(true)
  }
}
  })

  const openGetInfo = () => {
    document.querySelector(".getInTouch_container").style = "display: flex"
  }


  
  return (
    <>
    {/* <h1 className="flashyTitles">Services</h1> */}
    

    <ul className="servicesTabs">
      <div className="bar">
        <div className="nodes1"></div>
        <div className="nodes2"></div>
        <div className="nodes3"></div>
        </div>
      <li><p style={{background:"#e90349"}}>Management</p>
        <ul className="list-types">
          <li>Time Management</li>
          <li>Organised File Structure</li>
          <li>GitHub Repositories</li>
          <li>Workload/Delegation Efficiency</li>
          <li>Hosting &amp; Reviews</li>
          </ul>
      </li>
      <li><p style={{background:"#450d3d"}}>Creativity</p>
      <ul className="list-types">
          <li>Multiple Platform</li>
          {/* TVC, Billboards, Banners, Websites, Applications */}
          <li>Expert Designer &amp; Developer</li>
          <li>Artwork / Retouching</li>
          <li>Asset Management</li>
          <li>Professional &amp; Swift Turnaround</li>
          </ul>

      </li>
      <li><p style={{background:"#a73559"}}>Consultation</p>
      <ul className="list-types">
          <li>Achieving Results</li>
          <li>Market Knowledge</li>
          <li>Quality Feedback</li>
          <li>Best Practice &amp; Insights</li>
          <li>Access Performance Analytics</li>
          </ul>
      </li>
      </ul>
      <div onClick={() => openServicesMenu(true)} className="iconArrow"></div>
      <div className="header">
      
    <div className="headline"></div>
    <div className="headline2"></div>
    </div>

      <div className="ctaInsight">
      <p>Find out how I can help your business<br/> <br/><button onClick={openGetInfo} className="cta">Contact</button></p>
      </div>

    </>

  )
}

export default Services;