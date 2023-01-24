import { Card } from "react-bootstrap";
import classes from "./SegmentCard.module.css"

const SegmentCard = (props) => {
  console.log(props.baseUrl + `/${props.id}`)

  return (
    <Card className={classes.Card} >
      <Card.Header as="h5">{props.issueType}</Card.Header>
      <Card.Body>
        <Card.Text></Card.Text>
        <video
          className={classes.Segment}
          src={props.baseUrl + `/segments/${props.id}`}
          controls
        ></video>
      </Card.Body>
    </Card>
  );
};

export default SegmentCard;
