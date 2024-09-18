import React, { useState, useEffect } from 'react';
import questions from './Questions';

const Question = ({ question, index }) => {
  const [answer, setAnswer] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const savedAnswer = localStorage.getItem(`question-${question.id}`);
    if (savedAnswer) {
      setAnswer(savedAnswer);
    }
  }, [question.id]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (question.type === 'rating') {
      if (value > question.scale) {
        setWarning(`Please enter a value less than or equal to ${question.scale}`);
        return;
      } else {
        setWarning("");
      }
    }

    setAnswer(value);
    localStorage.setItem(`question-${question.id}`, value);
  };

  return (
    <>
      <h1 style={{paddingBottom:"15px"}}><center>Customer Survey</center></h1>
      <h5 style={{textAlign:"right", paddingRight:"225px"}}> Question {index+1}/{questions.length}</h5>
      <div className="top-left" style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        <img src="https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png" alt="GemGlow Logo" style={{ height: '50px', marginRight: '10px' }} />
        <strong style={{ fontSize: '24px' }}>GemGlow Store</strong>
      </div>

      <div className="mb-3" style={{width:"80%", paddingLeft:"225px", paddingTop:"60px"}}>
        <label htmlFor={`question-${question.id}`} className="form-label">
          <strong>{index + 1}. {question.text}</strong>
        </label>

        {question.type === 'rating' ? (
          <>
            <input type="number" className="form-control" id={`question-${question.id}`} min="1" max={question.scale} value={answer} onChange={handleInputChange} placeholder={`Rate from 1 to ${question.scale}`} style={{ border: "1px solid black" }} />
            {warning && (<small style={{ color: "red" }}>{warning}</small>)}
          </>
        ) : (
          <textarea className="form-control" id={`question-${question.id}`} rows="3" value={answer} onChange={handleInputChange} placeholder="Enter your response here"></textarea>
        )}
      </div>
    </>
  );
};

export default Question;
