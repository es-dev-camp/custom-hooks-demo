import { useMap } from 'react-use';

type SampleType = {
  hello: string;
  [key: string]: unknown;
}

const MapDemo = () => {
  const [map, { set, setAll, remove, reset }] = useMap<SampleType>({
    hello: 'there',
  });

  return (
    <div>
      <button
        className="btn btn-xs btn-block btn-outline btn-info"
        onClick={() => set(String(Date.now()), new Date().toJSON())}
      >
        Add
      </button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => setAll({ hello: 'new', data: 'data' })}>
        Set new data
      </button>
      <button
        className="btn btn-xs btn-block btn-outline btn-info" 
        onClick={() => remove('hello')} disabled={!map.hello}
      >
        Remove 'hello'
      </button>
      <pre>{JSON.stringify(map, null, 2)}</pre>
    </div>
  );
};

export default MapDemo;
