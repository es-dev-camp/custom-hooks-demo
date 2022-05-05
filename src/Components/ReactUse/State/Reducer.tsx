import { useReducer } from 'react';
// import { createReducer } from 'react-use';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const initialState = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const ReducerDemo = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      カスタムミドルウェアによるreducerフックを実現するためのファクトリ<br />
      サンプル実装だとreduxのインターフェース型が合わないため未実装(useReducerのサンプルのみ)<br />
      <div>
        Count:
        <button className="btn btn-xs btn-outline btn-info mx-2" onClick={() => dispatch({ type: 'decrement' })}>-</button>
        {state.count}
        <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </>
  );
}

export default ReducerDemo;
