import { useTween } from "react-use";

const Tween = () => {
  const t = useTween();

  return <div>Tween: {t}</div>;
};

export default Tween;
