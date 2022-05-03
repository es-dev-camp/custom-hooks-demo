import { useError } from "react-use";

const ErrorDemo = () => {
  const dispatchError = useError();

  const clickHandler = () => {
    dispatchError(new Error("Some error!"));
  };

  return (
    <button className="btn btn-xs btn-outline btn-info" onClick={clickHandler}>
      Click me to throw Error
    </button>
  );
};

export default ErrorDemo;
