import { useMount } from "react-use";

const Mount = () => {
  useMount(() => console.log("Lifecycles: MOUNTED"));
  return <>console.log を確認</>;
};

export default Mount;
