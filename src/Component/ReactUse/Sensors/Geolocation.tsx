import { useGeolocation } from "react-use";

const Geolocation = (): JSX.Element => {
  const state = useGeolocation();
  return (
    <>
      <p>
        ユーザーの地理的な位置情報を取得するReactセンサーフックがあります。
        <br />
        位置情報を指定するオプションあり
      </p>
      <div className="mockup-code">
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Geolocation;
