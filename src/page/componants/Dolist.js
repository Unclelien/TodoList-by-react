import React from 'react'
import './dolist.css'
import Listitem from './Listitem';


const Dolist = ({data,setData}) => {
  const totalCount = data.length;
  const completedCount = data.filter((v) => v.completed).length;
 
  const finishedperecnt = Math.ceil((completedCount / totalCount) * 100);
  
  return (
  <>
    <div className='barcontainer'>
     <div className='bar'>
      <p className='barnum'>{completedCount===0 ? 0 : finishedperecnt}%</p>
      <div className="progress">
        <div className="progressbar" style={{ width: `${finishedperecnt}%` }}></div>
       </div>
     </div>
      
    </div> 
    <Listitem data={data} setData={setData}/>
  </>
  )
}

export default Dolist