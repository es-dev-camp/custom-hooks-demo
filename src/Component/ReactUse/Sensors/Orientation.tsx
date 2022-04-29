import { useOrientation } from "react-use";

const Orientation = (): JSX.Element => {
  const state = useOrientation();

  return (
    <div className="mockup-code">
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Orientation;
