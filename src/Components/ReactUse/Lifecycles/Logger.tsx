import {useLogger} from 'react-use';

const LoggerDemo = (props: unknown) => {
  useLogger('LoggerDemo', props);
  return <>console.log を確認</>;
};

export default LoggerDemo;
