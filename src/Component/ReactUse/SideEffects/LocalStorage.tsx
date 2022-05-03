import { useLocalStorage } from "react-use";

const LocalStorage = () => {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");

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
      <button className="btn btn-xs btn-outline btn-info ml-2" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default LocalStorage;
