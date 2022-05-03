import { useToggle, useVibrate } from "react-use";

const Vibrate = () => {
  const [vibrating, toggleVibrating] = useToggle(false);

  useVibrate(vibrating, [300, 100, 200, 100, 1000, 300], false);

  return (
    <div>
      <button
        className="btn btn-block btn-sm btn-info"
        onClick={toggleVibrating}
      >
        {vibrating ? "Stop" : "Vibrate"}
      </button>
    </div>
  );
};

export default Vibrate;
