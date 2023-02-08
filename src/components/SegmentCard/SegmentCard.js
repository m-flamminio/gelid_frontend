import { Card } from "react-bootstrap";
import classes from "./SegmentCard.module.css";

const SegmentCard = (props) => {
  console.log(props.baseUrl + `/${props.id}`);

  return (
    <div className={classes.Card}>
      <div className={classes.Body}>
        <h5 className={classes.Title}>{props.issue.name}</h5>
        <video
          className={classes.Segment}
          src={props.baseUrl + `/segments/${props.id}`}
          controls
        ></video>
        <ul className={classes.Infos}>
          <li>Minutaggio: 2:15</li>
          <li>Origine: {props.video.name}</li>
          <li>Secondo inizio: 10s</li>
          <li>Secondo fine: 16s</li>
        </ul>
      </div>
    </div>
  );
};

export default SegmentCard;
