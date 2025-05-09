import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const Calbmi = (e) => {
  e.preventDefault();

  if (weight === 0 || height === 0 || isNaN(weight) || isNaN(height)) {
    alert("Kindly enter valid numeric height and weight");
  } else {
    const bmiValue = (weight / (height * height)) * 703;
    const roundedBmi = bmiValue.toFixed(2);
    setBmi(roundedBmi);

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You are a healthy weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }

    // Reset the inputs
    setWeight('');
    setHeight('');
  }
};


  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={Calbmi} className="Forms-main">
        <h1>BMI Calculator</h1>
        <div>
          <label>Body Weight (lbs)</label>
          <input
            type="text"
            placeholder="Kindly enter your body weight"
            value={weight}
            className="input-box"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label>Height (in)</label>
          <input
            type="text"
            placeholder="Kindly enter your height"
            className="input-box"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
<div>
        <button className="sub-btn">Submit</button>
        <button className="re-btn" onClick={reload}>Reload</button>

</div>

        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
      </form>
    </>
  );
}

export default App;
