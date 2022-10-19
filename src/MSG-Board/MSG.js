import './MSGboard.css';
import React from 'react';


function MSG({ author, time, children}) {
  return (
    <div className='MSGcontainer'>
      <div className='MSG-head'>
        <div className='MSGauthor' id>{author}</div>
        <div className='MSGtime'>{time}</div>
      </div>
      <div className='MSG-body'>
        <div className='MSGcontent'>{children}</div>
      </div>

    </div>
  )

}

export default MSG;