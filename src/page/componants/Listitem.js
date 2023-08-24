import React from 'react'
import './listitem.css'

export default function Listitem({data,setData}) {
    console.log(data);
    const deletebtn = (v) => {
        setData((prev) => prev.filter((c) => c.id !== v.id));
      };
  return (
    <>
    {data.map((v)=>{
        return(
          <div className='liststyle' key={v.id}>
           <div className='forcontent'>
              <input type='checkbox' className='inputstyle' 
              onChange={() => {setData((prev) =>
              prev.map((item) =>item.id === v.id ? 
              { ...item, completed: !item.completed } : item));}}/>
              <p className={v.completed ? 'completed' : 'listcontent'}>{v.content}</p>
           </div>
           <div className='delete' onClick={()=>{deletebtn(v)}}>X</div>
          </div>
        )
      })
      }
    </>
  )
}
