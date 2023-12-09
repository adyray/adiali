import './_css/App.css';
import React, {useState} from 'react'
function Cover(props) {
    const styles = {
        cover: {
            backgroundColor:"#ccc"
        }
    }

const [state, setState] = useState()

const press = (e) => {
    e.preventDefault(); 

    if(e.keyCode === 13){
        if(state === "adiali@power"){
        props.define(false)
        }
    }
    
}

const updateWord = (e) => {
    setState(e.target.value)
}


  return (
    <div style={styles.cover}>
      Website down for maintenance.
      
      <form action="#">
      <input type="password" onKeyUp={e => press(e)} onChange={(e) => updateWord(e)}/>
      </form>

    </div>
  );
}

export default Cover;
