import CardFrame from "./CardFrame";

import Battery from "./Sensors/Battery";
import NetworkState from "./Sensors/NetworkState";

type ContentType = {
  name: string;
  body: () => JSX.Element;
};

const Content = (): JSX.Element => {
  const contents: ContentType[] = [
    { name: 'useBattery', body: Battery },
    { name: 'useNetworkState', body: NetworkState },
  ];
  return (
    <div className="flex flex-row flex-wrap items-start justify-start">
      {contents.map(content => {
        return (
          <CardFrame feature={content.name} children={content.body} />
        )
      })}
    </div>
  );
};

export default Content;
