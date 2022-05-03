import { useDropArea } from "react-use";

const DropArea = () => {
  const [bond, state] = useDropArea({
    onFiles: (files) => console.log("files(Area)", files),
    onUri: (uri) => console.log("uri(Area)", uri),
    onText: (text) => console.log("text(Area)", text),
  });

  return <div {...bond}>Drop something here.</div>;
};
export default DropArea;
