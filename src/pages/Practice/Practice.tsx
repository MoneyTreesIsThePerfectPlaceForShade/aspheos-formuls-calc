import {useState} from 'react';

export const Practice = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  const handleStepMinus = () => {
    setStep((step) => step - 1);
  };

  const handleStepPlus = () => {
    setStep((step) => step + 1);
  };

  const handleCountMinus = () => {
    setCount((count) => count - step);
    // setCurrentDate((currentDate) => currentDate - count * 1000 * 60 * 60 * 24);
  };

  const handleCountPlus = () => {
    setCount((count) => count + step);
    // setCurrentDate((currentDate) => currentDate + count * 1000 * 60 * 60 * 24);
  };

  return (
    <div
      style={{
        margin: '0 auto',
        width: '1200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>{new Date(date).toLocaleDateString()}</div>
    </div>
  );
};
