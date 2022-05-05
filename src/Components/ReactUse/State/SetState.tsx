import { useSetState } from 'react-use';

type SampleState = {
  hello?: string;
  foo?: string;
  count?: number;
};

const SetState = () => {
  const [state, setState] = useSetState<SampleState>({});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => setState({ hello: 'world' })}
      >
        hello
      </button>
      <button
        className="btn btn-xs btn-block btn-outline btn-info" 
        onClick={() => setState({ foo: 'bar' })}
      >
        foo
      </button>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => {
          setState((prevState) => ({
            count: (prevState.count || 0) + 1,
          }))
        }}
      >
        count
      </button>
    </div>
  );
};

export default SetState;
