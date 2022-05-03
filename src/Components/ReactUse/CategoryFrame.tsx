import { useToggle } from "react-use";

import CardFrame from "./CardFrame";

export type CategoryFrameProps = {
  title: string;
  contents: ContentType[];
};

type ContentType = {
  name: string;
  body: () => JSX.Element;
};

const CategoryFrame = ({ title, contents }: CategoryFrameProps): JSX.Element => {
  const [toggle, setToggle] = useToggle(false);
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input
        type="checkbox"
        checked={toggle}
        onClick={setToggle}
        onChange={() => console.log(`Changed ${title} collapse`)}
      />
      <div className="collapse-title text-xl font-medium bg-base-200 rounded-lg mb-2">{title}</div>
      <div className="collapse-content p-0">
        <div className="flex flex-row flex-wrap items-start justify-start">
          {contents.map((content, index) => {
            return (
              <CardFrame
                key={index}
                feature={content.name}
                children={content.body}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFrame;
