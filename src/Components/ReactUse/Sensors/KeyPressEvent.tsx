import { useState } from "react";
import { useKeyPressEvent } from "react-use";

const KeyPressEvent = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => ++count);
  const decrement = () => setCount((count) => --count);
  const reset = () => setCount((count) => 0);

  useKeyPressEvent("]", increment, increment);
  useKeyPressEvent("[", decrement, decrement);
  useKeyPressEvent("r", reset);

  return (
    <div>
      <p>
        Try pressing <kbd className="kbd">[</kbd>
        <kbd className="kbd">]</kbd>
        <kbd className="kbd">r</kbd> to see the count incremented and
        decremented.
      </p>
      <p>Count: {count}</p>
    </div>
  );
};

export default KeyPressEvent;
