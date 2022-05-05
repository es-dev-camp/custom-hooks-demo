import { useState } from 'react';
import { useLatest } from 'react-use';

const Latest = () => {
  const [count, setCount] = useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`Latest count value: ${latestCount.current}`);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-xs btn-outline btn-info" onClick={() => setCount(count + 1)}>Click me</button>
      <button className="btn btn-xs btn-outline btn-error ml-2" onClick={handleAlertClick}>Show alert</button>
    </div>
  );
};

export default Latest;
