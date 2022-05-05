import { useState } from 'react';
import { usePrevious } from 'react-use';

const Previous = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <p>
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};

export default Previous;
