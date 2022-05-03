import CategoryFrame from "../CategoryFrame";

import Battery from "./Battery";
import Geolocation from "./Geolocation";
import Hover from "./Hover";
import Idle from "./Idle";
import Intersection from "./Intersection";
import Key from "./Key";
import KeyPress from "./KeyPress";
import KeyPressEvent from "./KeyPressEvent";
import Location from "./Location";
import LongPress from "./LongPress";
import MediaQuery from "./MediaQuery";
import MediaDevices from "./MediaDevices";
import Motion from "./Motion";
import Mouse from "./Mouse";
import MouseHovered from "./MouseHovered";
import MouseWheel from "./MouseWheel";
import NetworkState from "./NetworkState";
import Orientation from "./Orientation";
import PageLeave from "./PageLeave";
import Scratch from "./Scratch";
import Scroll from "./Scroll";
import Scrolling from "./Scrolling";
import StartTyping from "./StartTyping";
import WindowScroll from "./WindowScroll";
import WindowSize from "./WindowSize";
import Measure from "./Measure";
import Size from "./Size";
import Breakpoint from "./Breakpoint";
import ScrollbarWidth from "./ScrollbarWidth";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="Sensors"
    contents={[
      { name: "useBattery", body: Battery },
      { name: "useGeolocation", body: Geolocation },
      { name: "useHover", body: Hover },
      { name: "useIdle", body: Idle },
      { name: "useIntersection", body: Intersection },
      { name: "useKey", body: Key },
      { name: "useKeyPress", body: KeyPress },
      { name: "useKeyPressEvent", body: KeyPressEvent },
      { name: "useLocation", body: Location },
      { name: "useLongPress", body: LongPress },
      { name: "useMedia", body: MediaQuery },
      { name: "useMediaDevices", body: MediaDevices },
      { name: "useMotion", body: Motion },
      { name: "useMouse", body: Mouse },
      { name: "useMouse", body: MouseHovered },
      { name: "useMouseWheel", body: MouseWheel },
      { name: "useNetworkState", body: NetworkState },
      { name: "useOrientation", body: Orientation },
      { name: "usePageLeave", body: PageLeave },
      { name: "useScratch", body: Scratch },
      { name: "useScroll", body: Scroll },
      { name: "useScrolling", body: Scrolling },
      { name: "useStartTyping", body: StartTyping },
      { name: "useWindowScroll", body: WindowScroll },
      { name: "useWindowSize", body: WindowSize },
      { name: "useMeasure", body: Measure },
      { name: "useSize", body: Size },
      { name: "createBreakpoint", body: Breakpoint },
      { name: "useScrollbarWidth", body: ScrollbarWidth },
    ]}
  />
);

export default Category;
