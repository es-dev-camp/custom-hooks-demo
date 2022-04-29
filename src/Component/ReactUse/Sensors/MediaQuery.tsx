import { useMedia } from "react-use";

const MediaQuery = (): JSX.Element => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <div>
      Screen is wide: {isWide ? 'Yes' : 'No'}
    </div>
  );
};

export default MediaQuery;