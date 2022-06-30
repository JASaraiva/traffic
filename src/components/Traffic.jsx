import './Traffic.css';
import Light from './Light';

function Traffic() {
  return (
    <div className="Traffic">
      <div id="container">
        <Light color="red" />
        <Light color="yellow" />
        <Light color="green" />
      </div>
    </div>
  );
}

export default Traffic;
