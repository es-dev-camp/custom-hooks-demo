import { useStartTyping } from "react-use";

const StartTyping = (): JSX.Element => {
  useStartTyping(() => alert('Started typing...'));

  return <></>;
};

export default StartTyping;
