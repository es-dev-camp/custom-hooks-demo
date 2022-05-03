import { useRaf } from "react-use";

const Raf = () => {
  const elapsed = useRaf(5000, 1000);

  return <div>Elapsed: {elapsed}</div>;
};

export default Raf;
