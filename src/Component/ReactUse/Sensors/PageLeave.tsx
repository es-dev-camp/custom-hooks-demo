import { usePageLeave } from "react-use";

const PageLeave = (): JSX.Element => {
  usePageLeave(() => console.log('Page left...'));

  return <></>;
};

export default PageLeave;
