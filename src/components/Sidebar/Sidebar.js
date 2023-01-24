import { Accordion } from "react-bootstrap";
import SideElement from "./SideElement/SideElement";

const Sidebar = (props) => {
  let elements = props.elements.map((el, index) => {
    return (
      <SideElement key={index} videoId={props.videoId} updateSegments={props.updateSegments} {...el} />
    );
  });

  return <Accordion className="text-center">{elements}</Accordion>;
};

export default Sidebar;
