// import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import { useState } from 'react'


export default function Display() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const arr = [1, 2, 3,4,5,6];
  const [over, setOver] = useState(0);
  const [ball, setBall] = useState(0);

  const runCount = (x) => {
    setRun(run + x);
    setFreeHit(false);
    ballInc();
  }

  const freeRun = (x) => {
    setRun(run + 1);
    if (x) {
      setFreeHit(true);
    }
  }

  const fallWicket = () => {
    setWicket(wicket + 1);
    ballInc();
  }

  const ballInc = () =>{
    setBall(ball + 1);
    setFreeHit(false);
    if (ball === 5) {
      setOver(over + 1);
      setBall(0);
    }
  }

  const resetAll = () => {
    setRun(0);
    setWicket(0);
    setOver(0);
    setBall(0);
    setFreeHit(false);
  }

  const handleBall = () => {
    setFreeHit(false);
    setBall(ball - 1);
    if (ball === 0) {
      setBall(5);
      setOver(over - 1);
    }
  }

  const handleRun = (x) => {
    setRun(run + x);
    setVisible(!visible);
  }

  const handleFreeRun = (x) => {
    if (!x) {
      setRun(run + 1);
      setVisible(!visible);
    }
    else {
      setRun(run + 1);
      setVisible(!visible);
      setFreeHit(true);
    }
  }

  const [visible, setVisible] = useState(false)
  const [freeHit, setFreeHit] = useState(false)

  // const handleWide = () => {
  //   if(visible)
  //   {
  //     setVisible(false);
  //   }
  //   else{
  //     setVisible(true);
  //   }
  // }

  return (
    <>
      <div className="container board">

        <div className="container coli">
          <button className='btn' onClick={() => runCount(1)}>1 Run</button>
          <button className='btn' onClick={() => runCount(2)}>2 Runs</button>
          <button className='btn' onClick={() => runCount(3)}>3 Runs</button>
          <button className='btn' onClick={() => runCount(4)}>4 Runs</button>
          <button className='btn' onClick={() => runCount(5)}>5 Runs</button>
          <button className='btn' onClick={() => runCount(6)}>6 Runs</button>
        </div>

        <div className='container'>
          <div className="left"><h2>{run}/{wicket}</h2></div>
          <div className="right"><h2>{over}.{ball}</h2></div>
        </div>

        <div className="container coli">
          <button className='btn' disabled={freeHit} onClick={fallWicket}>Out</button>
          <button className='btn' onClick={ballInc}>Dot</button>

          <button className='btn2' disabled={!freeHit} onClick={fallWicket}>Run-Out</button>

          <button className='btn' onClick={() => freeRun(0)}>Wide</button>
          <button className='btn' onClick={() => freeRun(1)}>No-Ball</button>
        </div>
      </div>
      <div className="extras">
        
        <div className='container'>
          <button className='btn' onClick={() => handleFreeRun(0)}>Wide(bye)</button>
          <button className='btn' onClick={() => handleFreeRun(1)}>No-Ball(bye)</button>

          {visible && <div>
            <button className='btn' onClick={() => handleRun(1)}>1 Run</button>
            <button className='btn' onClick={() => handleRun(2)}>2 Runs</button>
            <button className='btn' onClick={() => handleRun(3)}>3 Runs</button>
            <button className='btn' onClick={() => handleRun(4)}>4 Runs</button>
            <button className='btn' onClick={() => handleRun(5)}>5 Runs</button>
            <button className='btn' onClick={() => handleRun(6)}>6 Runs</button>
          </div>}
          
      </div>
        </div>
      <div className="container">
        <button className='btn butt' onClick={() => setRun(run-1)}>Decrease Run</button>
        <button className='btn butt' onClick={resetAll}>Reset Score</button>
        <button className='btn butt' onClick={handleBall}>Decrease Ball</button>
      </div>

    </>
  )
}
