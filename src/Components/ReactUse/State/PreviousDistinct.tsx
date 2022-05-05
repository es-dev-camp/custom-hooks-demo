import { usePreviousDistinct, useCounter } from 'react-use';

const PreviousDistinct = () => {
  const [count, { inc: relatedInc }] = useCounter(0);
  const [unrelatedCount, { inc }] = useCounter(0);
  const prevCount = usePreviousDistinct(count);

  return (
    <div>
      Now: {count}, before: {prevCount}
      <button 
        className="btn btn-xs btn-outline btn-info mx-2"
        onClick={() => relatedInc()}
      >
        Increment
      </button>
      <br />
      Unrelated: {unrelatedCount}
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => inc()}
      >
        Increment Unrelated
      </button>
    </div>
  );
};
export default PreviousDistinct;
