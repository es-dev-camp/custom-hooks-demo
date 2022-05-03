import { useLifecycles } from "react-use";

const Lifecycles = () => {
  useLifecycles(
    () => console.log("Lifecycles: MOUNTED"),
    () => console.log("Lifecycles: UNMOUNTED")
  );
  return <>console.log を確認</>;
};

export default Lifecycles;
