import CategoryFrame from "../CategoryFrame";

import Audio from "./Audio";
import ClickAway from "./ClickAway";
import Css from "./Css";
import Drop from "./Drop";
import DropArea from "./DropArea";
import Fullscreen from "./Fullscreen";
import Slider from "./Slider";
import Speech from "./Speech";
import Vibrate from "./Vibrate";
import Video from "./Video";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="UI"
    contents={[
      { name: "useAudio", body: Audio },
      { name: "useClickAway", body: ClickAway },
      { name: "useCss", body: Css },
      { name: "useDrop", body: Drop },
      { name: "useDrop", body: DropArea },
      { name: "useFullscreen", body: Fullscreen },
      { name: "useSlider", body: Slider },
      { name: "useSpeech", body: Speech },
      { name: "useVibrate", body: Vibrate },
      { name: "useVideo", body: Video },
    ]}
  />
);

export default Category;
