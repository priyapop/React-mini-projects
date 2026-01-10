import React from 'react';
import CountdowTimer from './index'
function CountdownTimerTest() {

function handleTimeFinish(){
console.log('finished')
}

  return (
    <div className='countdown-timer-container'>
      <h1>Countdown timer</h1>
      <CountdowTimer initalTime={120} onTimeFinish={handleTimeFinish}/>
    </div>
  );
}

export default CountdownTimerTest;
