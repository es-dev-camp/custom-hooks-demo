import Sensors from "../Components/ReactUse/Sensors/Category";
import UI from "../Components/ReactUse/UI/Category";
import Animations from "../Components/ReactUse/Animations/Category";
import SideEffects from "../Components/ReactUse/SideEffects/Category";
import Lifecycles from "../Components/ReactUse/Lifecycles/Category";

const ReactUsePage = (): JSX.Element => {
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

export default ReactUsePage;
