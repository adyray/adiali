import React from 'react'

function Template(data) {

return (
    <>
    <section className="b_section">
      {/* <img src={data.src} alt="img"/> */}
      <div className="blogImage" style={{backgroundImage : "url("+data.src+")"}}></div>
      <div className="b_title">
        {/* <h1 className="flashyTitles"> */}
            {data.title}
            {/* </h1> */}
      </div>
      <div className="contents">
            <h2>Related Articles</h2>  
            <ul className="content_list">
                {data.content}
      </ul>
        </div>
      <div className="b_content">
        {/* <h2 style={{fontSize:"25pt", color:"white"}}></h2> */}
        <h1 className="flashyTitles">{data.subheading}</h1>
        {data.body}
      </div>
  </section>
    </>
);
}

export default Template;

