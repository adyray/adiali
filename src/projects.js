import { useState, useEffect } from 'react'
import Navbar from './_content/main/navbar'
import Footer from './_content/main/footer'
import ProjectTemplate from './_content/projects/projectTemplate'
import indeed1 from './_img/contents/indeed/1.mp4'
import indeed2 from './_img/contents/indeed/2.mp4'
import indeed3 from './_img/contents/indeed/3.mp4'

import ind1 from './_img/contents/indeed/1.png'
import ind2 from './_img/contents/indeed/2.jpg'
import ind3 from './_img/contents/indeed/3.jpg'
import ind4 from './_img/contents/indeed/4.png'
import ind5 from './_img/contents/indeed/5.png'
import ind6 from './_img/contents/indeed/6.png'


import fitbit1 from './_img/contents/fitbit/1.jpg'
import fitbit2 from './_img/contents/fitbit/2.jpg'
import fitbit3 from './_img/contents/fitbit/3.jpg'
import fitbit4 from './_img/contents/fitbit/4.jpg'
import fitbit5 from './_img/contents/fitbit/5.jpg'
import fitbit6 from './_img/contents/fitbit/6.jpg'

import or1 from './_img/contents/oracle/1.png'
import or2 from './_img/contents/oracle/2.png'
import or3 from './_img/contents/oracle/3.png'
import or4 from './_img/contents/oracle/4.png'
import or5 from './_img/contents/oracle/5.png'
import or6 from './_img/contents/oracle/6.png'

import ihg1 from './_img/contents/IHG/1.png'
import ihg2 from './_img/contents/IHG/2.png'
import ihg3 from './_img/contents/IHG/3.png'
import ihg4 from './_img/contents/IHG/4.png'
import ihg5 from './_img/contents/IHG/5.png'
import ihg6 from './_img/contents/IHG/6.png'

import fb1 from './_img/contents/fb/1.png'
import fb2 from './_img/contents/fb/2.png'
import fb3 from './_img/contents/fb/3.png'
import fb4 from './_img/contents/fb/4.jpg'
import fb5 from './_img/contents/fb/5.png'
import fb6 from './_img/contents/fb/6.png'

import ea1 from './_img/contents/ea/1.jpg'
import ea2 from './_img/contents/ea/2.jpg'
import ea3 from './_img/contents/ea/3.jpg'
import ea4 from './_img/contents/ea/4.jpg'
import ea5 from './_img/contents/ea/5.jpg'
import ea6 from './_img/contents/ea/6.png'



import vidIhg1 from './_img/contents/IHG/1.mp4'

import './_css/Work.css'

//project one
import React from 'react'

// import p2_1 from './_img/p2_img/1.jpg'
// import p2_2 from './_img/p2_img/2.jpg'
// import p2_3 from './_img/p2_img/3.jpg'
// import p2_4 from './_img/p2_img/4.jpg'
// import p2_5 from './_img/p2_img/5.jpg'
// import p2_6 from './_img/p2_img/6.jpg'


// import p3_1 from './_img/p3_img/1.jpg'
// import p3_2 from './_img/p3_img/2.jpg'
// import p3_3 from './_img/p3_img/3.png'
// import p3_4 from './_img/p3_img/4.png'
// import p3_5 from './_img/p3_img/5.jpg'
// import p3_6 from './_img/p3_img/6.jpg'

// import cs from './_img/comingsoon.gif'

import gsap from 'gsap/all'

function Work() {

  const [proj, setProj] = useState(false)
  const activateThis = (e, n) => {
    const panel = document.getElementsByClassName("flashyTitles")[n].offsetTop
    gsap.to(window, 2, { scrollTo: { y: panel + 40 } })
  }

  const isElementOutViewport = (el) => {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }

  const checkSelectorInView = (n) => {
    const panel = document.getElementsByClassName("panel")[n]
    let select = document.getElementsByClassName("selector")
    window.addEventListener("scroll", () => {
      if (isElementOutViewport(panel)) {
        if (typeof select[n] !== "undefined") {
        select[n].classList.remove("active")
        }
      } else {
        if (typeof select[n] !== "undefined") {
          console.log()
          select[n].classList.add("active")
        }
      }
    })
  }


  useEffect(() => {
    const panelSelector = document.querySelectorAll(".panel")
    const bool = (panelSelector.length > 0) ? true : false

    if (bool) {
      checkSelectorInView(0)
      checkSelectorInView(1)
      checkSelectorInView(2)
      checkSelectorInView(3)
      checkSelectorInView(4)
      checkSelectorInView(5)
    }

  })


  const openMenu = (val) => {
    const ps = document.querySelector(".project_sidebar")
    if (val) {
      setProj(!val)
      gsap.to(ps, 1, { left: "0%", height: "90vh" })
    } else {
      setProj(!val)
      gsap.to(ps, 1, { left: "-92vw", height: "300px" })
    }

  }

  return (
    <>
      <Navbar /><br />
      <div className="section_layout">
        <div onClick={() => openMenu(proj)} className="project_sidebar">
          <div className="jam">
            <div className="menuText">PROJECT MENU</div>
            {/* <p>PROJECTS</p> */}
            <ul>
              <li className="selector active" onClick={(e) => activateThis(e, 0)}>
                Fitbit
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 1)}>
                Meta
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 2)}>
                Electronic Arts
              </li>
            </ul>
            <ul>
              <li className="selector" onClick={(e) => activateThis(e, 3)}>
                Indeed
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 4)}>
                IHG
              </li>
              <li className="selector" onClick={(e) => activateThis(e, 5)}>
                Oracle
              </li>
            <p className="scrolltoslide"><span>&darr;</span><br />scroll to view</p>


            </ul>

          </div>
        </div>


        <div className="main_container">
          <div className="container_workpage">

            <ul className="preview">

              <li className="sliderWrap">

                <div className="slider">
                  <ProjectTemplate
                    title={"Fitbit"}
                    image1={fitbit1}
                    image2={fitbit2}
                    image3={fitbit3}
                    image4={fitbit4}
                    image5={fitbit5}
                    image6={fitbit6}
                  />
                  <ProjectTemplate
                    title={"Meta"}
                    image1={fb1}
                    image2={fb2}
                    image3={fb3}
                    image4={fb4}
                    image5={fb5}
                    image6={fb6}
                  />
                  <iframe width="90%" height="440" src="https://www.youtube.com/embed/Ksn6iPWUoIg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                  <ProjectTemplate
                    title={"Electronic Arts"}
                    image1={ea1}
                    image2={ea2}
                    image3={ea3}
                    image4={ea4}
                    image5={ea5}
                    image6={ea6}
                  />

                  <ProjectTemplate
                    title={"Indeed"}
                    image1={ind1}
                    image2={ind2}
                    image3={ind3}
                    image4={ind4}
                    image5={ind5}
                    image6={ind6}
                  />
                <iframe width="90%" height="440px" src="https://www.youtube.com/embed/pZodu9AgwZE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <video width="90%" src={indeed1} controls/>
                <video width="90%" src={indeed2} controls/>
                <video width="90%" src={indeed3} controls/>
                  <ProjectTemplate
                    title={"IHG"}
                    image1={ihg1}
                    image2={ihg2}
                    image3={ihg3}
                    image4={ihg4}
                    image5={ihg5}
                    image6={ihg6}
                  />
                <video width="94%" src={vidIhg1} controls/>

                  <ProjectTemplate
                    title={"Oracle"}
                    image1={or1}
                    image2={or2}
                    image3={or3}
                    image4={or4}
                    image5={or5}
                    image6={or6}
                  />
                  <iframe width="90%" height="440px" src="https://www.youtube.com/embed/vC2XbiNsfBY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  <iframe width="90%" height="440px" src="https://www.youtube.com/embed/cAcLhpuCmmA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                </div>

              </li>
            </ul>


          </div>
        </div>


      </div>
      <Footer />
    </>
  );
}

export default Work;
