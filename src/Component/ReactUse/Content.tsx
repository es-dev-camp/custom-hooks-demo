import NetworkState from "./Sensors/NetworkState";

const Content = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start">
      <NetworkState />
    </div>
  );
};

export default Content;
