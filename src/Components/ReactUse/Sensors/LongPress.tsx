import { useState } from "react";
import { useLongPress } from "react-use";

const LongPress = (): JSX.Element => {
  const [buttonTitle, setButtonTitle] = useState('Press Me');
  const longPressTime = 1500;
  const onLongPress = () => {
    setButtonTitle(`calls callback after long pressing ${longPressTime}ms`);
  };

  const defaultOptions = {
    isPreventDefault: true,
    delay: longPressTime,
  };
  const longPressEvent = useLongPress(onLongPress, defaultOptions);

  return <button className="btn" {...longPressEvent}>{buttonTitle}</button>;
};

export default LongPress;
