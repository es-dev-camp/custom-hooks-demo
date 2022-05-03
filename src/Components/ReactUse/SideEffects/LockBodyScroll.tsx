import { useLockBodyScroll, useToggle } from "react-use";

const LockBodyScroll = () => {
  const [locked, toggleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  return (
    <>
      <button
        className="btn btn-xs btn-outline btn-info"
        onClick={toggleLocked}
      >
        {locked ? "Unlock" : "Lock"}
      </button>
    </>
  );
};

export default LockBodyScroll;
