import { useNetworkState } from "react-use";

const NetworkState = (): JSX.Element => {
  const state = useNetworkState();
  return (
    <>
      <p>
        ブラウザのネットワーク状態を取得する
        <br />
        規格上、ブラウザがインターネットに接続されていることは保証されず、ネットワーク接続のみが保証されている
      </p>
      <div className="mockup-code">
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default NetworkState;
