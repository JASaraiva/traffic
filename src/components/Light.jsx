import { useState } from 'react';
import './Light.css';

function Light(props) {
  const [color, setColor] = useState('default');
  let default_color = '#999';

  const handleClick = () => {
    if (props.color == 'red') {
      setColor('red');
    } else if (props.color == 'yellow') {
      setColor('yellow');
    } else if (props.color == 'green') {
      setColor('green');
    } else {
      setColor('default');
    }
  };

  return (
    <button
      className="Light"
      style={{
        backgroundColor: isActive ? color : default_color,
      }}
      onClick={() => {
        handleClick();
      }}
    ></button>
  );
}

export default Light;
