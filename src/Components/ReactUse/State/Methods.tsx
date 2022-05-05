import { useMethods } from 'react-use';

const initialState = {
  count: 0,
};
type SampleState = typeof initialState;

const createMethods = (state: SampleState) => {
  return {
    reset() {
      return initialState;
    },
    increment() {
      return { ...state, count: state.count + 1 };
    },
    decrement() {
      return { ...state, count: state.count - 1 };
    },
  };
}

const Methods = () => {
  const [state, methods] = useMethods(createMethods, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={methods.increment}>+</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={methods.decrement}>-</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={methods.reset}>reset</button>
    </>
  );
};
export default Methods;
