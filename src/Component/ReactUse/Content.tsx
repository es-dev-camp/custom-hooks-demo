import CardFrame from "./CardFrame";
import NetworkState from "./Sensors/NetworkState";

const Content = (): JSX.Element => {
  const contents: (() => JSX.Element)[] = [
    NetworkState
  ];
  return (
    <div className="flex flex-col items-start justify-start">
      {contents.map(content => {
        return (
          <CardFrame feature="useNetworkState" children={content} />
        )
      })}
    </div>
  );
};

export default Content;
