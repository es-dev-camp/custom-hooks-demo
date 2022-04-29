import { useMouseWheel } from "react-use";

const MouseWheel = (): JSX.Element => {
  const mouseWheel = useMouseWheel();
  return (
    <>
      <h3>delta Y Scrolled: {mouseWheel}</h3>
    </>
  );
};

export default MouseWheel;
