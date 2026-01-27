import React, { useState } from 'react';

function ToggleComponent() {
  // 1. Initialize state (false = 'off', true = 'on')
  const [isOn, setIsOn] = useState(false);

  // 2. Define the toggle function
  const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>
        {isOn ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
}

export default ToggleComponent