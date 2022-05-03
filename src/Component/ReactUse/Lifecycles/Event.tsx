import { useCallback } from "react";
import { useEvent, useList } from "react-use";

const Event = () => {
  const [list, { push, clear }] = useList();

  const onKeyDown = useCallback(({ key }: { key: string }) => {
    if (key === "r") clear();
    push(key);
  }, []);

  useEvent("keydown", onKeyDown);

  return (
    <div>
      <p>
        Press some keys on your keyboard,{" "}
        <kbd className="kbd">r</kbd> key resets the list
      </p>
      <pre>{JSON.stringify(list, null, 4)}</pre>
    </div>
  );
};

export default Event;
