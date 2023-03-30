import { Button } from "react-bootstrap";
import classes from "./SegmentCard.module.css";
import { ImYoutube2 } from "react-icons/im";

const SegmentCard = (props) => {
  let clusterButton = null;
  if (props.showCluster && props.issue)
    clusterButton = (
      <Button
        className={classes.Button}
        onClick={() => props.showCluster(props.issue.id)}
      >
        Visualizza altri simili
      </Button>
    );

  let title = props.issue ? props.issue.name : "Bug";

  return (
    <div className={classes.Card}>
      <div className={classes.Body}>
        <h5 className={classes.Title}>{title}</h5>
        <video
          className={classes.Segment}
          src={props.baseUrl + `/segments/${props.id}`}
          controls
        ></video>
        <ul className={classes.Infos}>
          <li>Origine: {props.video.title}</li>
          <li>Secondo inizio: {props.startSecond} s</li>
          <li>Secondo fine: {props.endSecond} s</li>
        </ul>
        <div className={classes.Buttons}>
          {clusterButton}
          <Button
            onClick={() =>
              window.open(props.video.url + "&t=" + props.startSecond, "_blank")
            }
            variant="danger"
          >
            Guarda su <ImYoutube2 style={{ width: "3rem" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SegmentCard;
