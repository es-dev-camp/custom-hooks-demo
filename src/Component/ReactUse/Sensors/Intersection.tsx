import { useRef } from "react";
import { useIntersection } from "react-use";

const Intersection = (): JSX.Element => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <>
      <div>
        {intersection && intersection.intersectionRatio < 1
          ? "表示は隠れています"
          : "完全に表示されています"}
      </div>
      <div ref={intersectionRef}>
        <p>要素が完全に画面に表示されているか確認する</p>
      </div>
    </>
  );
};

export default Intersection;
