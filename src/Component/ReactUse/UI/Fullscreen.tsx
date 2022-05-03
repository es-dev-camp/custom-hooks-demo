import { useRef } from "react";
import { useFullscreen, useToggle } from "react-use";

const Fullscreen = () => {
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });

  return (
    <div ref={ref} style={{ backgroundColor: "white" }}>
      <div>{isFullscreen ? "Fullscreen" : "Not fullscreen"}</div>
      <button className="btn btn-block btn-sm btn-info my-3" onClick={toggle}>Toggle</button>
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoPlay />
    </div>
  );
};

export default Fullscreen;
