import { useRef } from "react";
import { useSlider } from "react-use";

const Slider = () => {
  const ref = useRef(null);
  const { isSliding, value } = useSlider(ref);

  const width = 320;

  return (
    <div>
      <div ref={ref} style={{ position: "relative" }}>
        <p style={{ textAlign: "center", color: isSliding ? "red" : "green" }}>
          {Math.round(value * 100)}%
        </p>
        <div style={{ position: "absolute", left: width * value, top: -1 }}>🎚</div>
      </div>
    </div>
  );
};

export default Slider;
