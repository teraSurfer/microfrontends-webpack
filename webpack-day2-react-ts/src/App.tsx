import React, { useState } from 'react';

interface ButtonProps {
  label: string;
}

const CounterButton: React.FC<ButtonProps> = ({ label }) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {label}: {count}
    </button>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>React + TypeScript + Webpack</h1>
      <CounterButton label="Clicks" />
    </div>
  );
};

export default App;
