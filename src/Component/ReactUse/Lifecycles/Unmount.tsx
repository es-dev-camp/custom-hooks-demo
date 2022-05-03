import { useUnmount } from "react-use";

const Unmount = () => {
  useUnmount(() => console.log("Lifecycles: UNMOUNTED"));
  return <>console.log を確認</>;
};

export default Unmount;
