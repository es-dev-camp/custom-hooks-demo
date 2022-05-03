import { useMotion } from "react-use";

const Motion = (): JSX.Element => {
  const state = useMotion();

  return (
    <div className="mockup-code">
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Motion;
