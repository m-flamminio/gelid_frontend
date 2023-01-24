import { Accordion, ListGroup } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionItem from "react-bootstrap/esm/AccordionItem";

const SideElement = (props) => {
  const showCard = useAccordionButton(props.id);

  return (
    <AccordionItem eventKey={props.id}>
      <Accordion.Header onClick={showCard}>{props.name}</Accordion.Header>
      <Accordion.Body style={{ padding: "0px 0px" }}>
        <ListGroup variant="flush"></ListGroup>
      </Accordion.Body>
    </AccordionItem>
  );
};

export default SideElement;
