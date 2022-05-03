import CategoryFrame from "../CategoryFrame";

import Raf from "./Raf";
import Interval from "./Interval";
import HarmonicIntervalFn from "./HarmonicIntervalFn";
import Spring from "./Spring";
import Timeout from "./Timeout";
import TimeoutFn from "./TimeoutFn";
import Tween from "./Tween";
import Update from "./Update";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="Animations"
    contents={[
      { name: "useRaf", body: Raf },
      { name: "useInterval", body: Interval },
      { name: "useInterval", body: HarmonicIntervalFn },
      { name: "useSpring", body: Spring },
      { name: "useTimeout", body: Timeout },
      { name: "useTimeoutFn", body: TimeoutFn },
      { name: "useTween", body: Tween },
      { name: "useUpdate", body: Update },
    ]}
  />
);

export default Category;
