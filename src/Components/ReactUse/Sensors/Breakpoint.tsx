import { createBreakpoint } from "react-use";

const useBreakpoint = createBreakpoint();

const Breakpoint = (): JSX.Element => {
  const breakpoint = useBreakpoint();

  if (breakpoint === "laptopL") return <div> This is very big Laptop </div>;
  else if (breakpoint == "laptop") return <div> This is Laptop</div>;
  else if (breakpoint == "tablet") return <div> This is Tablet</div>;
  else return <div> Too small!</div>;
};

export default Breakpoint;
