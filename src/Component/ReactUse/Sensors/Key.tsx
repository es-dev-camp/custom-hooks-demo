import { useState } from "react";
import { useKey } from "react-use";

const Key = (): JSX.Element => {
  const [count, set] = useState(0);
  const increment = () => set((count) => ++count);
  useKey("ArrowUp", increment);

  return <div>上向き矢印キー ↑ の押下回数: {count}</div>;
};

export default Key;
