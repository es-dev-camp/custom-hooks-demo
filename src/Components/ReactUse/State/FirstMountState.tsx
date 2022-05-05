import { useFirstMountState, useUpdate } from 'react-use';

const FirstMountState = () => {
  const isFirstMount = useFirstMountState();
  const update = useUpdate();

  return (
    <div>
      <span>This component is just mounted: {isFirstMount ? 'YES' : 'NO'}</span>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={update}>re-render</button>
    </div>
  );
};

export default FirstMountState;
