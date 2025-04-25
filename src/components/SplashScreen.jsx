// components/SplashScreen.js
import React from 'react';

function SplashScreen() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-primary text-white position-fixed top-0 start-0 w-100 h-100 z-3">
      <h1 className="display-3 fw-bold">SINAPIS</h1>
      <div className="position-absolute bottom-0 end-0 p-3">
        <small className="text-white">Developed by: Dev fab250</small>
      </div>
    </div>
  );
}

export default SplashScreen;
