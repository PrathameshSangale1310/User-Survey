import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div className="container-fluid welcome-container" style={{ height: '100vh', position: 'relative', backgroundColor: 'black', color: 'white' }}>
      <div className="top-left" style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', alignItems: 'center' }}>
        <img src="https://www.shareicon.net/data/512x512/2016/02/07/281223_cart_512x512.png" alt="GemGlow Logo" style={{ height: '50px', marginRight: '10px' }} />
        <strong style={{ fontSize: '24px' }}>GemGlow Store</strong>
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
        <h2>Welcome to Our Survey!</h2>
        <button type="button" id='but1' style={{ backgroundColor: 'white', color: 'black', borderRadius: '50px',border:"1px solid white", padding: '10px 30px' }} className="btn btn-primary my-2" onClick={onStart}>
        <strong>Start</strong>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
