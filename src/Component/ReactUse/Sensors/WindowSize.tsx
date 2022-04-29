import { useWindowSize } from "react-use";

const WindowSize = (): JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};

export default WindowSize;
