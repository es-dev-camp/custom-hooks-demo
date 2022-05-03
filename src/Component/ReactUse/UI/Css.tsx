import { useCss } from "react-use";

const Css = () => {
  const className = useCss({
    color: "red",
    border: "1px solid red",
    "&:hover": {
      color: "blue",
    },
  });
  return <div className={className}>Hover me!</div>;
};

export default Css;
