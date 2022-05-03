import { useMediaDevices } from "react-use";

const MediaDevices = (): JSX.Element => {
  const state = useMediaDevices();

  return (
    <div className="mockup-code">
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </div>
  );
};

export default MediaDevices;
