import React, { useState } from 'react';
import { Switch } from 'antd';

const style1 = {
    display:'flex',
    alignItem:'center',
    justifyContent:'flex-end',
    gap:'10px'
}

export default function Morebutton({data,setData}) {
  const [sortfinished, setSortfinished] = useState(false);

  const changehandle = () => {
    setSortfinished(prev => !prev);
    if (!sortfinished) {
        const sortedData = [...data].sort((a, b) => (a.completed && !b.completed ? 1 : -1));
        setData(sortedData);
    }
};

  return (
    <>
    <div style={style1}>
        <p>Move done things to end?</p>
        <Switch defaultChecked={sortfinished} onChange={changehandle}/>
    </div>
    </>
  )
}
