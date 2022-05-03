import { useLocation } from "react-use";

const Location = (): JSX.Element => {
  const state = useLocation();
  return (
    <>
      <p>
        ブラウザの位置を追跡する
        <br />
        IE では polyfill が必要
      </p>
      <div className="mockup-code">
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Location;
