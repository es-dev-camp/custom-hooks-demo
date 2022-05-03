import { useToggle } from "react-use";

import CardFrame from "../CardFrame";

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

type ContentType = {
  name: string;
  body: (props?: unknown) => JSX.Element;
};

const Category = (): JSX.Element => {
  const title = "Lifesycles";
  const [toggle, setToggle] = useToggle(false);
  const contents: ContentType[] = [
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
  ];
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input
        type="checkbox"
        checked={toggle}
        onClick={setToggle}
        onChange={() => console.log(`Changed ${title} collapse`)}
      />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {contents.map((content, index) => {
            return (
              <CardFrame
                key={index}
                feature={content.name}
                children={content.body}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
