import {useVideo} from 'react-use';

const Video = () => {
  const [video, state, controls, ref] = useVideo(
    <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoPlay />
  );

  return (
    <div>
      {video}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button className="btn btn-xs btn-outline btn-info" onClick={controls.pause}>Pause</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={controls.play}>Play</button>
      <br/>
      <button className="btn btn-xs btn-outline btn-info" onClick={controls.mute}>Mute</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={controls.unmute}>Un-mute</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
      <br/>
      <button className="btn btn-xs btn-outline btn-info" onClick={() => controls.volume(.1)}>Volume: 10%</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={() => controls.volume(1)}>Volume: 100%</button>
    </div>
  );
};

export default Video;
