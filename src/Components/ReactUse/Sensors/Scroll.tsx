import { useRef } from "react";
import { useScroll } from "react-use";

const Scroll = (): JSX.Element => {
  const scrollRef = useRef(null);
  const {x, y} = useScroll(scrollRef);

  return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};

export default Scroll;
