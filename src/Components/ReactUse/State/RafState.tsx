import { useRafState, useMount } from 'react-use';

const RafState = () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useMount(() => {
    const onResize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

export default RafState;
