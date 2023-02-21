import SegmentCard from "../SegmentCard/SegmentCard";
import classes from './ClusterContainer.module.css'

const ClusterContainer = (props) => {
  let segments = props.segments.map((seg) => (
    <SegmentCard key={seg.id} baseUrl={props.baseUrl} {...seg} />
  ));

  return  (<div className={classes.Container}>{segments}</div>);
};

export default ClusterContainer;
