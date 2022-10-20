import './MSGboard.css';
import React, { useEffect, useState } from 'react';
import MSG from './MSG'

const API_URL = 'https://student-json-api.lidemy.me/comments'


function Board() {
  const [message, setMessage] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data)
      })

      .catch(err => {
        setApiError(err.message)
      })
  }, [])

  return (
    <div className='web'>
      <div className='board'>
        <h1 className='title' >留言板</h1>
        <form typeof='form' className='board-form' >
          <input typeof='text' className='board-input' />
          <button className='board-summit'>送出留言</button>
        </form>
        <div className='board-list'>
          <MSG author={'Angie'} time='2022-10-19'>留言內容</MSG>
        </div>
      </div>
    </div>
  );
}

export default Board;