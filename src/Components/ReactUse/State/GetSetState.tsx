import { useState } from 'react';
import { useGetSetState } from 'react-use';

const GetSetState = () => {
  const [get, setGetSet] = useGetSetState({ count: 0 });
  const onClickGetSet = () => {
    setTimeout(() => {
      setGetSet({ count: get().count + 1 })
    }, 1_000);
  };

  const [countObject, set] = useState({ count: 0 });
  const onClickSetState = () => {
    setTimeout(() => {
      set({ count: get().count + 1 })
    }, 1_000);
  };

  return (
    <>
      <button className="btn btn-xs btn-outline btn-info" onClick={onClickGetSet}>
        Get Set Clicked(Actual): {get().count}
      </button>
      <button className="btn btn-xs btn-outline btn-info" onClick={onClickSetState}>
        useState Clicked(Wrong): {countObject.count}
      </button>
    </>
  );
};

export default GetSetState;
