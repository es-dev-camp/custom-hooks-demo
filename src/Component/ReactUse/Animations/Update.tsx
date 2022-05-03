import { useUpdate } from "react-use";

const Update = () => {
  const update = useUpdate();
  return (
    <>
      <div>Time: {new Date().toLocaleString("ja")}</div>
      <button className="btn btn-xs btn-outline btn-info" onClick={update}>
        Update
      </button>
    </>
  );
};

export default Update;
