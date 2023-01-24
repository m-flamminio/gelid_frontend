import { Accordion, ListGroup } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import { useState, useEffect } from "react";
import axios from "../../../axios";

const SideElement = (props) => {
  const showCard = useAccordionButton(props.id);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios
      .get(`${props.videoId}/contexts/${props.id}/issues`)
      .then((res) => setIssues(res.data.map((data) => data.issue)))
      .catch((err) => console.log(err));
  }, []);

  const issueItems = issues.map((issue) => (
    <ListGroup.Item style={{ cursor: "pointer" }} key={issue.id}>
      {issue.name}
    </ListGroup.Item>
  ));

  return (
    <AccordionItem eventKey={props.id}>
      <Accordion.Header onClick={showCard}>{props.name}</Accordion.Header>
      <Accordion.Body style={{ padding: "0px 0px" }}>
        <ListGroup variant="flush">
          {issueItems}
        </ListGroup>
      </Accordion.Body>
    </AccordionItem>
  );
};

export default SideElement;
