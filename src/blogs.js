import Navbar from './_content/main/navbar'
import React from 'react'
import Footer from './_content/main/footer'
import imgone from "./_img/6.jpg"
import imgtwo from "./_img/5.jpg"
import './_css/Blogs.css'
import { useState } from 'react'
import gsap from 'gsap/all'
import BlogTemplate from "./_content/blogs/blogTemplate"


function Blogs() {

  const [template, setTemplate] = useState(0)

const changeArticle = (n) => {
  gsap.to(window, 1, {scrollTo:{y:0}})
  setTemplate(n)
}
const selectContents = () => {
  return (
    <>
  <li onClick={() => changeArticle(0)}>How Ego Initiated</li>
  <li onClick={() => changeArticle(1)}>The Brand</li>
  {/* <li onClick={() => changeArticle(2)}>Article Three</li> */}
  {/* <li onClick={() => changeArticle(3)}>Article Four</li> */}
  </>
  )
}

const formatParagraph = (props) => {
  let nt = props.split('\n').map((text, i) => <div key={i}>{text}</div>);
  return nt
}



const updateBlog = (id) => {
  let space = `\u00A0`
  if(id === 0){
    return (
    <BlogTemplate 
      src={imgone}
      content={selectContents()}
      title={"How Ego Initiated"}
      subheading={formatParagraph("The Beginning of \nSomething Spectacular.")}
      body={formatParagraph(`It all started from a thought, where working in the field of marketing and advertising just wasn't enough. We wanted to build a brand behind our expertise, and something that ecapsulates our knowledge and experience. EGO Worldwide's manifesto is to bring more ideas together for an insight driven approach to global campaigns. Using tools and international resources, we have developed a strategy that works for the client, achieving the heights of visions rather than adapting to what is just possible. We strive to reach beyond and for the best. \n ${space} \n` + 
      "It has been a wonderful 10 years learning the ins and the outs of the field, and we've learnt the most important factor of an ad agency and that's, perfection is achieved when boundaries are surpassed. Becoming better than what has been achieved in previous stages, and having the confidence to be a part of the chain reaction of new age of design evolution and execution."
      )}
      />
      )
    }else if(id === 1)
    {
    return (
<BlogTemplate 
      src={imgtwo}
      title={"The Brand"}
      content={selectContents()}
      subheading={"Relation, Reaction, Reflection."}
      body={formatParagraph(
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti pariatur ex, corporis expedita reprehenderit ad repellendus sed at, beatae mollitia quisquam officiis molestiae rerum quae optio dolore! Architecto consequuntur mollitia similique accusamus saepe iusto, cum eius quasi commodi dolores delectus nihil, beatae fuga quas laborum reprehenderit corrupti iure quidem rem quae? Ut commodi eum reiciendis, sed corporis similique? Architecto vitae iure repellendus deleniti ducimus nesciunt dolore, dolorem nisi nulla aliquid, omnis et molestias atque! Ipsam cumque, animi consequuntur iure ullam nobis atque id explicabo deleniti dolore, quasi inventore. Aspernatur reiciendis veniam repellendus, labore eos consequatur blanditiis accusantium, nostrum rerum ipsa ipsum laboriosam recusandae quaerat enim? Inventore porro, at sequi rerum ipsa hic eum, cupiditate quam harum facilis id eos, molestias qui quia ex quisquam laborum deserunt blanditiis ab incidunt cumque expedita. Recusandae deserunt consectetur voluptate aliquam magnam praesentium. Quasi, quos nisi quae culpa debitis facilis possimus maxime magni placeat quidem odit exercitationem harum officia sunt architecto pariatur qui nesciunt labore voluptatem ab soluta ad eius velit provident. Ut earum iusto perspiciatis voluptas non et. Accusantium at adipisci nisi ullam, reprehenderit recusandae nesciunt nemo porro minima minus, culpa veniam quia vero laudantium ipsa ipsam mollitia? Beatae iste accusamus ducimus aut! Minus."
      )}
      />
    )
    }
  }

  return (
    <>
      <Navbar />
      <br/>
        <div className="container">
          {
        updateBlog(template)
          }
          
          </div> 

      <Footer />

     </>
  );
}

export default Blogs;
