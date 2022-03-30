import { Component, createSignal } from "solid-js";

const Counter: Component<{ color?: string }> = (props) => {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);

  return (
    <div style={{ color: props.color }}>
      {count()}
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  );
};

export default Counter;
