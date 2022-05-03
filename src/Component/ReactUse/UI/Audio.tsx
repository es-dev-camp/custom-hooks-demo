import { useAudio } from "react-use";

const Audio = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    autoPlay: false,
  });

  return (
    <div>
      {audio}
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
        className="btn btn-xs btn-outline btn-success"
        onClick={controls.mute}
      >
        Mute
      </button>
      <button
        className="btn btn-xs btn-outline btn-success ml-2"
        onClick={controls.unmute}
      >
        Un-mute
      </button>
      <button
        className="btn btn-xs btn-outline btn-success ml-2"
        onClick={() => controls.seek(state.time - 5)}
      >
        -5 sec
      </button>
      <button
        className="btn btn-xs btn-outline btn-success ml-2"
        onClick={() => controls.seek(state.time + 5)}
      >
        +5 sec
      </button>
      <br />
      <button
        className="btn btn-xs btn-outline btn-success"
        onClick={() => controls.volume(0.1)}
      >
        Volume: 10%
      </button>
      <button
        className="btn btn-xs btn-outline btn-success ml-2"
        onClick={() => controls.volume(0.5)}
      >
        Volume: 50%
      </button>
      <button
        className="btn btn-xs btn-outline btn-success ml-2"
        onClick={() => controls.volume(1)}
      >
        Volume: 100%
      </button>
    </div>
  );
};

export default Audio;
