import { useRendersCount, useUpdate } from "react-use";

const RendersCount = () => {
  const update = useUpdate();
  const rendersCount = useRendersCount();

  return (
    <div>
      <span>Renders count: {rendersCount}</span>
      <button className="btn btn-xs btn-block btn-outline btn-info" onClick={update}>re-render</button>
    </div>
  );
};
export default RendersCount;
