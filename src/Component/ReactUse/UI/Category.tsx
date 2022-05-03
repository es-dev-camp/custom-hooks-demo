import { useToggle } from "react-use";

import CardFrame from "../CardFrame";

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

type ContentType = {
  name: string;
  body: () => JSX.Element;
};

const Category = (): JSX.Element => {
  const [toggle, setToggle] = useToggle(true);
  const contents: ContentType[] = [
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
  ];
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input type="checkbox" checked={toggle} onClick={setToggle} />
      <div className="collapse-title text-xl font-medium">UI</div>
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
