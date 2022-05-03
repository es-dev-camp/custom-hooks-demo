import { useWindowScroll } from "react-use";

const WindowScroll = (): JSX.Element => {
  const { x, y } = useWindowScroll();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};

export default WindowScroll;
