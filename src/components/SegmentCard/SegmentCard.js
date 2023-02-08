import { Card } from "react-bootstrap";
import classes from "./SegmentCard.module.css"

const SegmentCard = (props) => {
  console.log(props.baseUrl + `/${props.id}`)

  return (
    <Card className={classes.Card} >
      <Card.Header as="h5">{props.issue.name}</Card.Header>
      <Card.Body className={classes.Body}>
        <video
          className={classes.Segment}
          src={props.baseUrl + `/segments/${props.id}`}
          controls
        ></video>
        <div className={classes.Infos}>
          <p>Minutaggio: </p>
          <p>Origine: {props.video.name}</p>
          <p>Secondo inizio: </p>
          <p>Secondo fine: </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SegmentCard;
