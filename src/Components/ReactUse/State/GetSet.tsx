import { useState } from 'react';
import { useGetSet } from 'react-use';

const GetSet = () => {
  const [get, setGetSet] = useGetSet(0);
  const onClickGetSet = () => {
    setTimeout(() => {
      setGetSet(get() + 1)
    }, 1_000);
  };

  const [count, set] = useState(0);
  const onClickSetState = () => {
    setTimeout(() => {
      set(count + 1)
    }, 1_000);
  };

  return (
    <>
      <button className="btn btn-xs btn-outline btn-info" onClick={onClickGetSet}>
        Get Set Clicked(Actual): {get()}
      </button>
      <button className="btn btn-xs btn-outline btn-info" onClick={onClickSetState}>
        useState Clicked(Wrong): {count}
      </button>
    </>
  );
};

export default GetSet;
