import { useToggle } from "react-use";

import CardFrame from "../CardFrame";

import Raf from "./Raf";
import Interval from "./Interval";
import HarmonicIntervalFn from "./HarmonicIntervalFn";
import Spring from "./Spring";
import Timeout from "./Timeout";
import TimeoutFn from "./TimeoutFn";
import Tween from "./Tween";
import Update from "./Update";

type ContentType = {
  name: string;
  body: () => JSX.Element;
};

const Category = (): JSX.Element => {
  const [toggle, setToggle] = useToggle(true);
  const contents: ContentType[] = [
    { name: "useRaf", body: Raf },
    { name: "useInterval", body: Interval },
    { name: "useInterval", body: HarmonicIntervalFn },
    { name: "useSpring", body: Spring },
    { name: "useTimeout", body: Timeout },
    { name: "useTimeoutFn", body: TimeoutFn },
    { name: "useTween", body: Tween },
    { name: "useUpdate", body: Update },
  ];
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input type="checkbox" checked={toggle} onClick={setToggle} />
      <div className="collapse-title text-xl font-medium">Animations</div>
      <div className="collapse-content">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {contents.map((content) => {
            return (
              <CardFrame
                key={content.name}
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
