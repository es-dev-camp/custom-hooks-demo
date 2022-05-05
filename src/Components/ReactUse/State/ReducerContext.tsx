import { createReducerContext } from 'react-use';

type Action = 'increment' | 'decrement';

const reducer = (state: number, action: Action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
};

const ReducerContext = () => {
  const [useSharedCounter, SharedCounterProvider] = createReducerContext(reducer, 0);

  const ComponentA = () => {
    const [count, dispatch] = useSharedCounter();
    return (
      <div>
        Component A &nbsp;
        <button className="btn btn-xs btn-outline btn-info" type="button" onClick={() => dispatch('decrement')}>
          -
        </button>
        &nbsp;{count}&nbsp;
        <button className="btn btn-xs btn-outline btn-info" type="button" onClick={() => dispatch('increment')}>
          +
        </button>
      </div>
    );
  };

  const ComponentB = () => {
    const [count, dispatch] = useSharedCounter();
    return (
      <div>
        Component B &nbsp;
        <button className="btn btn-xs btn-outline btn-info" type="button" onClick={() => dispatch('decrement')}>
          -
        </button>
        &nbsp;{count}&nbsp;
        <button className="btn btn-xs btn-outline btn-info" type="button" onClick={() => dispatch('increment')}>
          +
        </button>
      </div>
    );
  };
  return (
    // @ts-ignore
    <SharedCounterProvider>
      <p>Those two counters share the same value.</p>
      <ComponentA />
      <ComponentB />
    </SharedCounterProvider>
  );
};

export default ReducerContext;
