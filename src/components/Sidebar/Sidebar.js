import { Accordion } from "react-bootstrap";
import SideElement from "./SideElement/SideElement";

const Sidebar = (props) => {
  let elements = props.elements.map((el, index) => {
    return (
      <SideElement key={index} updateSegments={props.updateSegments} {...el} />
    );
  });

  return <Accordion className="text-center">{elements}</Accordion>;
};

export default Sidebar;
