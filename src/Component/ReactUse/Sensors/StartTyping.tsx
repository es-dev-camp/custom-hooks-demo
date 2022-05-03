import { useStartTyping } from "react-use";

const StartTyping = (): JSX.Element => {
  useStartTyping(() => console.log('Started typing...'));

  return <>console.log を確認</>;
};

export default StartTyping;
