import { useList } from 'react-use';

const ListDemo = () => {
  const [list, { set, push, updateAt, insertAt, update, updateFirst, upsert, sort, filter, removeAt, clear, reset }] = useList([1, 2, 3, 4, 5]);

  return (
    <div>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => set([1, 2, 3])}>Set to [1, 2, 3]</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => push(Date.now())}>Push timestamp</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => updateAt(1, Date.now())}>Update value at index 1</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => removeAt(1)}>Remove element at index 1</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => filter(item => item % 2 === 0)}>Filter even values</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => sort((a, b) => a - b)}>Sort ascending</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => sort((a, b) => b - a)}>Sort descending</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={clear}>Clear</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={reset}>Reset</button>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};
export default ListDemo;
