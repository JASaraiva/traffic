import { useState } from 'react';
import './Light.css';

function Light(props) {
  const [classes, setClass] = useState('Light');
  let disableLight = 'Light';

  const handleClick = () => {
    setClass(props.color);
  };

  return (
    <button
      className={
        props.color == classes ? 'ActiveLight' + classes : disableLight
      }
      onClick={() => {
        handleClick();
      }}
    ></button>
  );
}

export default Light;
