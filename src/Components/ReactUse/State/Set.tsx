import { useSet } from 'react-use';

const SetDemo = () => {
  const [set, { add, has, remove, toggle, reset }] = useSet(new Set(['hello']));

  return (
    <div>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => add(String(Date.now()))}
      >
        Add
      </button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => reset()}>
        Reset
      </button>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => remove('hello')} disabled={!has('hello') }
      >
        Remove 'hello'
      </button>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => toggle('hello')}
      >
        Toggle 'hello'
      </button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  );
};

export default SetDemo;
