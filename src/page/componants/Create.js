import React,{useState} from 'react'
import './create.css'

export default function Create({setData}) {
  const [value,setValue] = useState({
    id:'',
    content:''
  }
  )
  
  const getValue =(e)=>{
    const keyv = Math.ceil(Math.random()*10000000)
   setValue({
    id:keyv,
    content:e.target.value})
  }
  
  const addlist = ()=>{
    if(value.content){
    setData((prev)=>{
     return [...prev,value]
    })
    setValue({
      id: '',
      content: ''
    });
  }
  else{
    alert('不可為空白喔')
  }

  }

  return (
    <div>
        <h4 className='createtext'>Add to list</h4>
        <div className='inputgroup'>
        <input type='text' value={value.content} onChange={(e)=>{getValue(e)}} className='forminput'/>
        <button className='button1' onClick={addlist} >+</button>
        </div>
    </div>
  )
}
