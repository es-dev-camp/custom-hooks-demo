import { useSessionStorage } from "react-use";

const SessionStorage = () => {
  const [value, setValue] = useSessionStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={() => setValue("bar")}
      >
        bar
      </button>
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => setValue("baz")}
      >
        baz
      </button>
    </div>
  );
};

export default SessionStorage;
