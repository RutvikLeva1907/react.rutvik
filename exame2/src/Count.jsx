import React, { useState, useEffect } from 'react';
import './count.css'

function App() {
  const [inputMinutes, setInputMinutes] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMinutes(value);

    if (!isNaN(value) && value !== '' && value > 0) {
      const totalSeconds = parseInt(value) * 60;
      setHours(Math.floor(totalSeconds / 3600));
      setMinutes(Math.floor((totalSeconds % 3600) / 60));
      setSeconds(59);
      setIsRunning(true);
    } else {
      setIsRunning(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes === 0 && hours === 0) {
              clearInterval(timer);
              setIsRunning(false);
              return 0;
            } else if (minutes === 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
              return 59;
            } else {
              setMinutes((prevMinutes) => prevMinutes - 1);
              return 59;
            }
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, hours, minutes]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <label>
        Minutes:
        <input type="number" value={inputMinutes} onChange={handleInputChange} />
      </label>
      <div>
        <h2>Stopwatch Time:</h2>
        <p>{hours} Hours, {minutes} Minutes, {seconds} Seconds</p>
      </div>
      <div className='bts'>
        <button className='bts-1' onClick={setIsRunning}>start</button>
        <button className='bts-1'>stop</button>
        <button className='bts-1'>reset</button>

      </div>

    </div>
  );
}

export default App;