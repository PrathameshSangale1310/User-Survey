import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const Qna = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleCloseModalYes = () => {
    setShowModal(false);
    setShowThankYou(true);
    setTimeout(() => {
      navigate('/welcome');
    }, 5000);
  };

  const handleCloseModalNo = () => {
    setShowModal(false);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="container my-3" style={{ paddingTop: "150px", paddingBottom: "150px", color: "white" }}>
      {showThankYou ? (
        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
          <h2>Thank you for your time. Your response has been recorded!</h2>
        </div>
      ) : (
        <>
          <Question key={currentQuestion.id} question={currentQuestion} index={currentIndex} />
          <div className='d-flex mt-3' style={{ paddingLeft: "225px", gap: "525px", paddingBottom: "50px" }}>
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={handlePrev}
              className="btn btn-light"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentIndex === questions.length - 1}
              onClick={handleNext}
              className="btn btn-light"
            >
              Next
            </button>
          </div>
          {currentIndex === questions.length - 1 && (
            <div style={{ paddingLeft: "820px" }}>
              <button
                type="button"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
          {showModal && (
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ color: "black" }}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Survey Submission</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModalNo}></button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to submit?</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModalYes}>Yes</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModalNo}>No</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Qna;
