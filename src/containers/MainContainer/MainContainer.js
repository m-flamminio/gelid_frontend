import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import classes from "./MainContainer.module.css";
import SegmentCard from "../../components/SegmentCard/SegmentCard";
import axios from "../../axios";
import Backdrop from "../../components/Backdrop/Backdrop";
import ClusterContainer from "../../components/ClusterContainer/ClusterContainer";
import VideoOffCanvas from "../../components/VideoOffCanvas/VideoOffCanvas";

const MainContainer = (props) => {
  const [sidebarElements, setSidebarElements] = useState([]);
  const [clusters, setClusters] = useState(new Map());
  const [showClusterId, setShowClusterId] = useState(false);

  useEffect(() => {
    axios
      .get(`video/${props.videoId}/contexts`)
      .then((res) => setSidebarElements(res.data.map((e) => e.context)))
      .catch((err) => console.log(err));
  }, []);

  let groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  };

  let updateSegments = (contextId, issueType) => {
    axios
      .get(
        `video/${props.videoId}/segments?contextId=${contextId}&issueType=${issueType}`
      )
      .then((res) => {
        setClusters(
          groupBy(res.data, (seg) => (seg.issue ? seg.issue.id : -1))
        );
      })
      .catch((err) => console.log(err));
  };

  let toggleClusterSegments = (clusterId) => {
    setShowClusterId(clusterId);
  };

  let segmentsElement = [];
  for (const [key, value] of clusters) {
    segmentsElement.push(
      <SegmentCard
        key={key}
        baseUrl={axios.defaults.baseURL + "video/" + props.videoId}
        {...value[0]}
        showCluster={toggleClusterSegments}
      />
    );
  }

  let clusterSegments = null;
  if (showClusterId) {
    clusterSegments = (
      <>
        <Backdrop onClick={toggleClusterSegments} />
        <ClusterContainer
          baseUrl={axios.defaults.baseURL + "video/" + props.videoId}
          segments={clusters.get(showClusterId)}
        />
      </>
    );
  }

  const style = {display: props.showForm ? "none" : "unset"}

  return (
    <>
      {clusterSegments}
      <div className={classes.Sidebar} style={style}>
        <Sidebar
          videoId={props.videoId}
          updateSegments={updateSegments}
          elements={sidebarElements}
        />
      </div>
      <div className={classes.SegmentsContainer} style={style}>{segmentsElement}</div>
    </>
  );
};

export default MainContainer;
