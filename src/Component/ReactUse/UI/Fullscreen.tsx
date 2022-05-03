import { useRef } from "react";
import { useFullscreen, useToggle, useVideo } from "react-use";

const Fullscreen = () => {
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });

  const [video, state, controls] = useVideo(
    <video
      className="w-full"
      src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    />
  );

  return (
    <div ref={ref} style={{ backgroundColor: "white" }}>
      {!isFullscreen && (
        <>
          <div>
            {isFullscreen ? "Fullscreen" : "Not fullscreen"}{" "}
            {state.playing ? (
              <button
                className="btn btn-xs btn-outline btn-info"
                onClick={controls.pause}
              >
                Pause
              </button>
            ) : (
              <button
                className="btn btn-xs btn-outline btn-info"
                onClick={controls.play}
              >
                Play
              </button>
            )}
          </div>
          <button
            className="btn btn-block btn-sm btn-info my-3"
            onClick={toggle}
          >
            Toggle
          </button>
        </>
      )}

      {video}
    </div>
  );
};

export default Fullscreen;
