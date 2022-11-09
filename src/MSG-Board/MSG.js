import './MSGboard.css';
import React from 'react';


function MSG({ author, time, children}) {
  return (
    <div className='MSG-container'>
      <div className='MSG-head'>
        <div className='MSG-author'>{author}</div>
        <div className='MSG-time'>{time}</div>
      </div>
      <div className='MSG-body'>
        <div className='MSG-content'>{children}</div>
      </div>

    </div>
  )

}

export default MSG;