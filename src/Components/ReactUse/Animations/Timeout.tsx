import { useTimeout } from "react-use";

const TestComponent = (props: { ms?: number } = {}) => {
  const ms = props.ms || 5000;
  const [isReady, cancel] = useTimeout(ms);

  return (
    <div>
      {isReady()
        ? "I'm reloaded after timeout"
        : `I will be reloaded after ${ms / 1000}s`}
      {isReady() === false ? (
        <button className="btn btn-xs btn-outline btn-info ml-2" onClick={cancel}>
          Cancel
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

const Timeout = () => {
  return (
    <div>
      <TestComponent ms={2000} />
      <TestComponent />
      <TestComponent ms={10000} />
    </div>
  );
};

export default Timeout;
