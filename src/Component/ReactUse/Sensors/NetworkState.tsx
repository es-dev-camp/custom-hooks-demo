const NetworkState = (): JSX.Element => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg m-4">
      <div className="card-body">
        <h2 className="card-title">useNetworkState</h2>
        <p>
          ブラウザのネットワーク状態を取得する
          <br />
          規格上、ブラウザがインターネットに接続されていることは保証されず、ネットワーク接続のみが保証されている
        </p>
        <div className="card-actions justify-end">
          <a
            role="button"
            className="btn btn-primary btn-block"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/streamich/react-use/blob/master/docs/useNetworkState.md"
          >
            GitHubへ
          </a>
        </div>
      </div>
    </div>
  );
};

export default NetworkState;
