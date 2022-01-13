import '../../_css/Work.css'
import React from 'react'
import fourOfour from "../../_img/404.gif"
import Navbar from "../main/navbar"
import Footer from "../main/footer"

function Work() {

//   const [changeImage, setImage] = useState(false)

//   const inc = (e) => {
//     setImage(!e)
//   }




  return (
      <>
    <Navbar /><br/>
    <div className="main_container">
      <img src={fourOfour} width={"100%"} alt="404"/>
       <div style={{padding: "0px !important", margin:"-3px 0px", background: "#170f45"}}>
           <a href="/">
               <button>Take Me Home</button>
            </a>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Work;