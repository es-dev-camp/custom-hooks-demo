import { useState } from "react";
import { useCopyToClipboard } from "react-use";

const CopyToClipboard = () => {
  const [text, setText] = useState("");
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        className="btn btn-xs btn-outline btn-info ml-2"
        onClick={() => copyToClipboard(text)}
      >
        copy text
      </button>
      {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && <p>Copied {state.value}</p>
      )}
    </div>
  );
};

export default CopyToClipboard;
