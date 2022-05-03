import CategoryFrame from "../CategoryFrame";

import EffectOnce from "./EffectOnce";
import Event from "./Event";
import Lifecycles from "./Lifecycles";
import MountedState from "./MountedState";
import UnmountPromise from "./UnmountPromise";
import PromiseDemo from "./Promise";
import Logger from "./Logger";
import Mount from "./Mount";
import Unmount from "./Unmount";
import UpdateEffect from "./UpdateEffect";
import IsomorphicLayoutEffect from "./IsomorphicLayoutEffect";
import DeepCompareEffect from "./DeepCompareEffect";
import ShallowCompareEffect from "./ShallowCompareEffect";
import CustomCompareEffect from "./CustomCompareEffect";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="Lifesycles"
    contents={[
      { name: "useEffectOnce", body: EffectOnce },
      { name: "useEvent", body: Event },
      { name: "useLifecycles", body: Lifecycles },
      { name: "useMountedState", body: MountedState },
      { name: "useUnmountPromise", body: UnmountPromise },
      { name: "usePromise", body: PromiseDemo },
      { name: "useLogger", body: () => Logger({ props: 'SomeValue' }) },
      { name: "useMount", body: Mount },
      { name: "useUnmount", body: Unmount },
      { name: "useUpdateEffect", body: UpdateEffect },
      { name: "useIsomorphicLayoutEffect", body: IsomorphicLayoutEffect },
      { name: "useDeepCompareEffect", body: DeepCompareEffect },
      { name: "useShallowCompareEffect", body: ShallowCompareEffect },
      { name: "useCustomCompareEffect", body: CustomCompareEffect },
    ]}
  />
);

export default Category;
