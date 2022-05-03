import Sensors from "./Sensors/Category";
import UI from "./UI/Category";
import Animations from "./Animations/Category";
import SideEffects from "./SideEffects/Category";
import Lifecycles from "./Lifecycles/Category";

const Content = (): JSX.Element => {
  return (
    <>
      <Sensors />
      <UI />
      <Animations />
      <SideEffects />
      <Lifecycles />
    </>
  );
};

export default Content;
