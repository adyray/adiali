import '../../_css/Header.css'
import React from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin';
import { useEffect } from 'react';
import video from '../../_img/client/EGOWW.mp4'


gsap.registerPlugin(TextPlugin);

function Header() {

  const h1 = "The Ultimate Design Challenge.";
  const h2 = "Design Language.";
  const h3 = "Multiplatform Advertising";
  const h4 = "Consulting Best Practice";
  const empty = "";


  useEffect(() => {

    // document.addEventListener("DOMContentLoaded", () => {
      const hlz = document.querySelector(".headline")
      const hlz2 = document.querySelector(".headline2")
      const tl = gsap.timeline({repeat: -1});
  
      tl.to([hlz, hlz2], 0, {text:empty, y:-10, opacity:0})
      tl.to([hlz, hlz2], 2, {opacity:1, y:0, text:h1, ease:"none"})
      tl.to([hlz, hlz2], 1, {opacity:0, y:10, delay:3})
      tl.to([hlz, hlz2], 0, {text:empty, y:-10})
      tl.to([hlz, hlz2], 2, {opacity:1, y:0, text:h2, ease:"none"})
      tl.to([hlz, hlz2], 1, {opacity:0, y:10, delay:3})
      tl.to([hlz, hlz2], 0, {text:empty, y:-10})
      tl.to([hlz, hlz2], 2, {opacity:1, y:0, text:h3, ease:"none"})
      tl.to([hlz, hlz2], 1, {opacity:0, y:10, delay:3})
      tl.to([hlz, hlz2], 0, {text:empty, y:-10})
      tl.to([hlz, hlz2], 2, {opacity:1, y:0, text:h4, ease:"none"})
      tl.to([hlz, hlz2], 1, {opacity:0, y:10, delay:3})
      tl.to([hlz, hlz2], 0, {text:empty, y:-10})
    // })

  }, [])
  
  useEffect( () => {
    document.querySelector("video").addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
  }, [])
  

  return (
    <><br/>
    <div style={{marginTop:"33px"}}>
    <video className="video" width="100%" autoPlay muted loop>
    <source src={video} type="video/mp4" />
    {/* <source src="movie.ogg" type="video/ogg" /> */}
    Your browser does not support the video tag.
    </video>
    </div>
    
    </>
  )
  
}





export default Header;