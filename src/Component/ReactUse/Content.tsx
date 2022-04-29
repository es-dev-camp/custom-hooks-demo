import CardFrame from "./CardFrame";

import Battery from "./Sensors/Battery";
import Geolocation from "./Sensors/Geolocation";
import Hover from "./Sensors/Hover";
import Idle from "./Sensors/Idle";
import Intersection from "./Sensors/Intersection";
import Key from "./Sensors/Key";
import KeyPress from "./Sensors/KeyPress";
import KeyPressEvent from "./Sensors/KeyPressEvent";
import Location from "./Sensors/Location";
import LongPress from "./Sensors/LongPress";
import MediaQuery from "./Sensors/MediaQuery";
import MediaDevices from "./Sensors/MediaDevices";
import Motion from "./Sensors/Motion";
import Mouse from "./Sensors/Mouse";
import MouseHovered from "./Sensors/MouseHovered";
import MouseWheel from "./Sensors/MouseWheel";
import NetworkState from "./Sensors/NetworkState";
import Orientation from "./Sensors/Orientation";
import PageLeave from "./Sensors/PageLeave";
import Scratch from "./Sensors/Scratch";
import Scroll from "./Sensors/Scroll";
import Scrolling from "./Sensors/Scrolling";
import StartTyping from "./Sensors/StartTyping";
import WindowScroll from "./Sensors/WindowScroll";
import WindowSize from "./Sensors/WindowSize";
import Measure from "./Sensors/Measure";
import Size from "./Sensors/Size";
import Breakpoint from "./Sensors/Breakpoint";
import ScrollbarWidth from "./Sensors/ScrollbarWidth";

type ContentType = {
  name: string;
  body: () => JSX.Element;
};

const Content = (): JSX.Element => {
  const contents: ContentType[] = [
    { name: 'useBattery', body: Battery },
    { name: 'useGeolocation', body: Geolocation },
    { name: 'useHover', body: Hover },
    { name: 'useIdle', body: Idle },
    { name: 'useIntersection', body: Intersection },
    { name: 'useKey', body: Key },
    { name: 'useKeyPress', body: KeyPress },
    { name: 'useKeyPressEvent', body: KeyPressEvent },
    { name: 'useLocation', body: Location },
    { name: 'useLongPress', body: LongPress },
    { name: 'useMedia', body: MediaQuery },
    { name: 'useMediaDevices', body: MediaDevices },
    { name: 'useMotion', body: Motion },
    { name: 'useMouse', body: Mouse },
    { name: 'useMouse', body: MouseHovered },
    { name: 'useMouseWheel', body: MouseWheel },
    { name: 'useNetworkState', body: NetworkState },
    { name: 'useOrientation', body: Orientation },
    { name: 'usePageLeave', body: PageLeave },
    { name: 'useScratch', body: Scratch },
    { name: 'useScroll', body: Scroll },
    { name: 'useScrolling', body: Scrolling },
    { name: 'useStartTyping', body: StartTyping },
    { name: 'useWindowScroll', body: WindowScroll },
    { name: 'useWindowSize', body: WindowSize },
    { name: 'useMeasure', body: Measure },
    { name: 'useSize', body: Size },
    { name: 'createBreakpoint', body: Breakpoint },
    { name: 'useScrollbarWidth', body: ScrollbarWidth },
  ];
  return (
    <div className="flex flex-row flex-wrap items-start justify-start">
      {contents.map(content => {
        return (
          <CardFrame key={content.name} feature={content.name} children={content.body} />
        )
      })}
    </div>
  );
};

export default Content;
