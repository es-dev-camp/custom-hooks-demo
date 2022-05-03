import { usePageLeave } from "react-use";

const PageLeave = (): JSX.Element => {
  usePageLeave(() => console.log('Page left...'));

  return <>console.log を確認</>;
};

export default PageLeave;
