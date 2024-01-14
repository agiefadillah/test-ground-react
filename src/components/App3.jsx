import React, { useState, useEffect } from 'react';

function App3() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={() => setCurrentTime(new Date().toLocaleTimeString())}>Get Time</button>
    </div>
  );
}

export default App3;
