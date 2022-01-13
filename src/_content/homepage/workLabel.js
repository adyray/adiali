

function label(src) {
  return (
    <>
     <li className="imgContainer">
       <img src={src.img} alt="img"/>
       <div className="cap-title">
         <p>
         {src.title}
         </p>
       </div>
       <div className="cap">
       <p>
       {src.cap}
       </p>
       </div>
     </li>
    </>

  )
}

export default label;