import React,{Component,useState} from 'react'
import axios from 'axios'
import "./App.css"


const App =()=>{

const [count, setCount] = useState(0);



const increment =() =>{
  setCount(count+1);
}

return(
<div className="app">
   <h2> Counter App</h2>
   <button onClick={increment}>
   Clicked {count} times
   </button> 
</div> 
  )



};




export default App;
