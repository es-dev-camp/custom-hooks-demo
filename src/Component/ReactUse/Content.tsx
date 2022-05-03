import Sensors from "./Sensors/Category";
import UI from "./UI/Category";
import Animations from "./Animations/Category";
import SideEffects from "./SideEffects/Category";

const Content = (): JSX.Element => {
  return (
    <>
      <Sensors />
      <UI />
      <Animations />
      <SideEffects />
    </>
  );
};

export default Content;
