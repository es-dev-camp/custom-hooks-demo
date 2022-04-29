import { useRef } from "react";
import { useScrolling } from "react-use";

const Scrolling = (): JSX.Element => {
  const scrollRef = useRef(null);
  const scrolling = useScrolling(scrollRef);

  return (
    <div ref={scrollRef}>
      {<div>{scrolling ? "Scrolling" : "Not scrolling"}</div>}
    </div>
  );
};

export default Scrolling;
