import { useStartTyping } from "react-use";

const StartTyping = (): JSX.Element => {
  useStartTyping(() => console.log('Started typing...'));

  return <></>;
};

export default StartTyping;
