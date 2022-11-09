import './MSGboard.css';
import React, { useEffect, useState } from 'react';
import MSG from './MSG'

const API_URL = 'https://student-json-api.lidemy.me/comments'


function Board() {
  const [messages, setMessage] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [value, newValue] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMessage(data);
    } catch (err) {
      setApiError(err.message);
    } 
    finally {
      setIsLoading(false);
      newValue([]);
    }
  }


const onValueChange = (e) => newValue(e.target.value)
const formSummit = (e) => {
  e.preventDefault();
  if (isLoading === true) {
    return
  }
  setIsLoading(false)
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      nickname: 'Angie',
      body: value
    })
  })
  .then(res => res.json())
  .then(data => {
    fetchMessage()
  })
}


useEffect(() => {
  fetchMessage()
}, [])

return (
  <div className='web'>
    <div className='board'>
      <h1 className='title' >留言板</h1>
      <form className='board-form' onSubmit={formSummit}>
        <textarea className='board-input' value={value} onChange={onValueChange} />
        <button className='board-summit' >送出留言</button>
      </form>
      {apiError && <div>Something went wrong. {apiError.toString()}</div>}
      <div className='board-list'>
        {messages.map((message) => (
          <MSG
            key={message.id}
            author={message.nickname}
            time={message.createdAt}
          >
            {message.body}
          </MSG>
        ))}
      </div>
    </div>
  </div>
);
}

export default Board;