import '../../_css/Work.css'
import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

function Work(data) {

  useEffect(() => {
  
    const isElementOutViewport = (el) => {
      var rect = el.getBoundingClientRect();
      // console.log(rect)
      return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
    }

    let scroll = window.requestAnimationFrame || function(cb){ window.setTimeout(cb, 1000/60)} 

    const loops = () => {
      let elementsToShow = document.querySelectorAll(".advent")
      elementsToShow.forEach((elem) => {
        if(isElementOutViewport(elem)){
          elem.classList.remove("opacityChange")
        }else{
          elem.classList.add("opacityChange")
        }

      })
      scroll(loops)
    }
    loops();
  }, [])
 

  return (
    <>
    
  <h1 className="flashyTitles">{data.title}</h1>

  <section className="panel">
  
  <LazyLoadImage className="advent" src={data.image1} alt={"image"}/>
  <LazyLoadImage className="advent" src={data.image2} alt={"image"}/>
  <LazyLoadImage className="advent" src={data.image3} alt={"image"}/>
  <LazyLoadImage className="advent" src={data.image4} alt={"image"}/>
  <LazyLoadImage className="advent" src={data.image5} alt={"image"}/>
  <LazyLoadImage className="advent" src={data.image6} alt={"image"}/>
  
  </section>
   </> 
  )
}

export default Work;