import './Traffic.css';
import Light from './Light';

function Traffic() {
  return (
    <div className="Traffic">
      <div id="container">
        <Light color="Red" />
        <Light color="Yellow" />
        <Light color="Green" />
      </div>
    </div>
  );
}

export default Traffic;
