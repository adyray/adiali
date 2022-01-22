import './_css/instax.css';
import React, {useState} from 'react'
import logo from './_img/instax/logo.png'
import bg from './_img/instax/bg.jpg'
import p1 from './_img/instax/p1.png'

function App() {
const [image, setImage] = useState([])    
const [number, setNum] = useState(0)


const gen = () => {
  const finder= document.querySelector(".Finder")
  finder.style.opacity = "0.2"
  finder.classList.add("Disabled")
    const checker = setInterval(() => {
  document.querySelector(".Finder").style.opacity = "1"
  finder.classList.remove("Disabled")
      clearInterval(checker)
    },5000)

    const list = (
    <li key={number} className='slideDown'>
    <img alt="ran" className="genImage" src={'https://source.unsplash.com/random/200x200/?portrait='+number} />
  </li>)

    setNum(number+1)
    setImage([list, ...image])
  }

  return (
    <div className="App">
      <div className="wrapper">
      <div className="Finder" onClick={() => gen(number)}>
        Generate Photo
      </div> <img alt="p1" className="p1" width={"70"} src={p1} />
      <div className="DataBox">
        <p>Selfies Made Simple</p> 
        <ul className="data">
        {image}
        </ul>
      </div>
      <img alt="bg" className="bg" src={bg} />
      
      <img alt="logo" width="100" src={logo}/>
      <p className='footer'>&copy; Adiali by Adnan Ali</p>
    </div>
    </div>
  );
}

export default App;
