import { useRef } from "react";
import { useMouseHovered } from "react-use";

const MouseHovered = (): JSX.Element => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouseHovered(ref, {
    bound: true,
    whenHovered: true,
  });

  return (
    <div ref={ref}>
      <div>
        Mouse position in document - x:{docX} y:{docY}
      </div>
      <div>
        Mouse position in element - x:{elX} y:{elY}
      </div>
      <div>
        Element position- x:{posX} y:{posY}
      </div>
      <div>
        Element dimensions - {elW}x{elH}
      </div>
    </div>
  );
};

export default MouseHovered;
