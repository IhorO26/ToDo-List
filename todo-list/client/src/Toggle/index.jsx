import React, { useState } from 'react';

const Toggle = () => {
  const [click, setClick] = useState(false);

  return (
    <button onClick={() => setClick(!click)}>
      {click ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;