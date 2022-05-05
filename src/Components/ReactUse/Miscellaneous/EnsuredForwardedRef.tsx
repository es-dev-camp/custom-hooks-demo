import { forwardRef, useEffect } from 'react';
import { useEnsuredForwardedRef } from 'react-use';

const EnsuredForwardedRef = () => {
  return (
    <Child />
  );
};

const Child = forwardRef<any>((props, ref) => {
  if (!ref) return <></>;
  // Here `ref` is undefined
  // @ts-ignore
  const ensuredForwardRef = useEnsuredForwardedRef(ref);
  // ensuredForwardRef will always be a valid reference.

  useEffect(() => {
    console.log(ensuredForwardRef.current.getBoundingClientRect())
  }, [])

  return (
    <div ref={ensuredForwardRef} />
  );
});

export default EnsuredForwardedRef;
