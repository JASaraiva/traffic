import './Light.css';

function Light(props) {
  let default_color = '#999';
  let color = default_color;

  const handleClick = () => {
    if (props.color == 'red') {
      color = '#f00';
    } else if (props.color == 'yellow') {
      color = '#ff0';
    } else if (props.color == 'green') {
      color = '#0f0';
    } else {
      color = '#999';
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
