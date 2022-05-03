import { useEffectOnce } from "react-use";

const EffectOnce = () => {
  useEffectOnce(() => {
    console.log("Running effect once on mount");

    return () => {
      console.log("Running clean-up of effect on unmount");
    };
  });
  return <>console.log を確認</>;
};

export default EffectOnce;
