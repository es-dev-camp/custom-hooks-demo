import { useEffect } from 'react';
import {useUnmountPromise} from 'react-use';

const somePromiseFunc = () => {
  console.log('UnMountPromise');
  return Promise.resolve();
}

const UnmountPromise = () => {
  const mounted = useUnmountPromise();
  useEffect(() => {
    mounted(somePromiseFunc()); // Will not resolve if component un-mounts.
  });
  return <>console.log を確認</>;
};

export default UnmountPromise;
