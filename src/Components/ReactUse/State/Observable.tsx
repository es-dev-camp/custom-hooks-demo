import { useObservable } from 'react-use';
import { BehaviorSubject } from 'rxjs';

const counter$ = new BehaviorSubject(0);
const Observable = () => {
  const value = useObservable(counter$, 0);

  return (
    <button
      className="btn btn-xs btn-outline btn-info"
      onClick={() => counter$.next(value + 1)}
    >
      Clicked {value} times
    </button>
  );
};

export default Observable;
