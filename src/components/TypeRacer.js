import React from 'react';
import Button from './Button';

const TypeRacer = (props) => {
  const { 
    newWord,
    inputValue,
    timer,
    disabled,
    setInputValue,
    animation,
    handleInput,
    handleStart,
  } = props
  return(
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div className="time">
        <p style={{animation: animation !== null ? animation : ""}}>{timer}</p>
      </div>
      <div className="wordValues">
        <input type="text" onChange={e => setInputValue(e.target.value)} placeholder="start typing..." value={inputValue} disabled={disabled && disabled} placeholder={disabled ? "" : "start typing..."} onKeyPress={e => handleInput(e)} />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  )
}

export default TypeRacer;