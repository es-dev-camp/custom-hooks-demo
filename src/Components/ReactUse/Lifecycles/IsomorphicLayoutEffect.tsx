import {useIsomorphicLayoutEffect} from 'react-use';

const IsomorphicLayoutEffect = () => {
  const loggingValue = "IsomorphicLayoutEffect";
  useIsomorphicLayoutEffect(() => {
    window.console.log(loggingValue)
  }, [loggingValue]);
  return <>console.log を確認</>;
};

export default IsomorphicLayoutEffect;
