import { useVideo } from "react-use";

const Video = () => {
  const [video, state, controls, ref] = useVideo(
    <video src="https://player.vimeo.com/progressive_redirect/playback/696349232/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=405ffb945893ad5f05c543d7665ded03ae2dba2a8b8851ecbb309f63803ad85a" />
  );

  return (
    <div>
      {video}
      https://pixabay.com/ja/videos/
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={controls.pause}
      >
        Pause
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={controls.play}
      >
        Play
      </button>
      <br />
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={controls.mute}
      >
        Mute
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={controls.unmute}
      >
        Un-mute
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => controls.seek(state.time - 5)}
      >
        -5 sec
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => controls.seek(state.time + 5)}
      >
        +5 sec
      </button>
      <br />
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={() => controls.volume(0.1)}
      >
        Volume: 10%
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => controls.volume(0.5)}
      >
        Volume: 50%
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => controls.volume(1)}
      >
        Volume: 100%
      </button>
    </div>
  );
};

export default Video;
