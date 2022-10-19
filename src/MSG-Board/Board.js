import './MSGboard.css';
import React from 'react';
import MSG from './MSG'


function Board() {
  return (
    <div className='web'>
    <div className='board'>
      <h1 className='tilte' >留言板</h1>
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