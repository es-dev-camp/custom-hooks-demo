import { useState } from "react";
import { useDebounce, useTitle } from "react-use";

const Title = () => {
  const [title, setTitle] = useState("Custom Hooks Demo");
  const [debouncedValue, setDebouncedValue] = useState(title);
  useDebounce(
    () => {
      setDebouncedValue(title);
    },
    500,
    [title]
  );

  useTitle(debouncedValue);
  return (
    <>
      任意のタイトルに差し替えることができる
      <br />
      <input
        type="text"
        value={title}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setTitle(currentTarget.value);
        }}
      />
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => setTitle("react-use デモ")}
      >
        「react-use デモ」にする
      </button>
    </>
  );
};
export default Title;
