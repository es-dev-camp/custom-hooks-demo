import { useRef } from "react";
import { useClickAway } from "react-use";

const ClickAway = () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    console.log("useClickAway の赤枠外をクリックするとイベント発火");
  });

  return (
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        background: "red",
      }}
    />
  );
};

export default ClickAway;
