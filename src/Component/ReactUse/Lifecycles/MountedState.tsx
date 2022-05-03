import { useEffect } from 'react';
import {useMountedState} from 'react-use';

const MountedState = () => {
  const isMounted = useMountedState();

  useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        console.log('MountedState: isMounted');
      } else {
        console.log('MountedState: notMounted');
      }
    }, 1000);
  });
  return <>console.log を確認</>;
};

export default MountedState;
