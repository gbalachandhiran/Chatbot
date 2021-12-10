import React, { useState, useEffect } from 'react';
import './style.css';


const Timer = ({ seconds}) => {
    const [timer, setTimer] = useState(seconds);
    alert(seconds);
  return (
    <div>
      {timer}
    </div>
  );
};

export default Timer;
