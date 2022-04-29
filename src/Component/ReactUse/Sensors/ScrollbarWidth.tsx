import { useScrollbarWidth } from "react-use";

const ScrollbarWidth = (): JSX.Element => {
  const sbw = useScrollbarWidth();

  return (
    <div>
      {sbw === undefined
        ? `DOM is not ready yet, SBW detection delayed`
        : `Browser's scrollbar width is ${sbw}px`}
    </div>
  );
};

export default ScrollbarWidth;
