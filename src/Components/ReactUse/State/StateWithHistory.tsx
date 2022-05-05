import { useStateWithHistory } from 'react-use';

const StateWithHistory = () => {
  const [state, setState, stateHistory] = useStateWithHistory({ count: 0 });
  const onClickGetSet = () => setState({ count: Date.now() });

  return (
    <>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={onClickGetSet}>
        Click Me: {state.count}
      </button>
      <pre>{JSON.stringify(stateHistory, null, 2)}</pre>
    </>
  );
};
export default StateWithHistory;
