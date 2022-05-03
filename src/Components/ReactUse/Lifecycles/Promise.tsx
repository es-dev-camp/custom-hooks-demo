import { useEffect, useState } from 'react';
import {usePromise} from 'react-use';

const somePromiseFunc = () => {
  console.log('usePromise');
  return Promise.resolve('usePromise');
}

const PromiseDemo = () => {
  const mounted = usePromise();
  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      const value = await mounted(somePromiseFunc());
      // This line will not execute if <Demo> component gets unmounted.
      setValue(value);
    })();
  });
  return <>console.log を確認</>;
};

export default PromiseDemo;
