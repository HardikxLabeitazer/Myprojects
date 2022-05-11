import './App.css';
import React,{useState} from 'react'
function App() {
  // const [count,setCount]=useState(0);
  const [text,setText]=useState('');
  const [arr,setArr]=useState([])
  
  const handeAdd=(item)=>{
    setArr([...arr,item]);
    setText('');
  }
  const handledelete=(item)=>{
    setArr(arr.filter((ele)=>(
       ele !== item
    )))
    setText('');
  }
  const handleclear=()=>{
    setArr([]);
  }
  return (
    <div style={{margin:"200px"}}>
      {/* <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <h1>{count}</h1> */}

      {/* <input type='text' onChange={(e)=>setText(e.target.value)}/>
      <h1>{text}</h1> */}

      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>handeAdd(text)} style={{margin:'10px'}}>ADD</button>
      <button onClick={()=>handledelete(text)} style={{margin:'10px'}}>Delete</button>
      <button style={{margin:'10px'}} onClick={()=>handleclear()}>Clear All</button>
      <ul>
        {
          arr.map((ele,i)=>{
           return <li key={i}>{ele}</li>
            })
        }
      </ul>
    </div>
  );
}

export default App;
