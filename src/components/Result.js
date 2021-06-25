import React from 'react';

const Result = ({ correctAnswer, result, wrongAnswer }) => {
  return (
    <div className="results">
      <div className="title">
        <p>Correct Result: {result}</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          {correctAnswer.map((correctWord, i) => {
            return (
              <div key={i} className="row">
                <p>{correctWord}</p>
              </div>
            )
          })}
        </div>
        <div className="wrongResults">
          {wrongAnswer.map((wrongWord, i) => {
            return (
              <div key={i} className="row">
                <p>{wrongWord}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Result;