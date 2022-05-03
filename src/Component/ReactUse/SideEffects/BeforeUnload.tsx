import { useBeforeUnload, useToggle } from "react-use";

const BeforeUnload = () => {
  const [dirty, toggleDirty] = useToggle(false);
  useBeforeUnload(dirty, "You have unsaved changes, are you sure?");

  return (
    <div>
      {dirty && <p>Try to reload or close tab</p>}
      <button className="btn btn-xs btn-outline btn-info" onClick={toggleDirty}>
        {dirty ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default BeforeUnload;
