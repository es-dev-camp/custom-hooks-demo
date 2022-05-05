import { useQueue } from 'react-use';

const QueueDemo = () => {
  const { add, remove, first, last, size } = useQueue<number>();

  return (
    <div>
      <ul>
        <li>first: {first}</li>
        <li>last: {last}</li>
        <li>size: {size}</li>
      </ul>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => add((last || 0) + 1)}>Add</button>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={() => remove()}>Remove</button>
    </div>
  );
};

export default QueueDemo;
