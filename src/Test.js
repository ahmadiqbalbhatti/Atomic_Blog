import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

export default function Test() {
  const [count, setCount] = useState(0);
  return (
    <Counter>
      <SlowComponent />
    </Counter>
  );
}

function Counter({children}) {
  return (
    <div>
      <div>
        <h1>Slow counter?!?</h1>
        <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
        {children}
      </div>
    </div>
  );
}
