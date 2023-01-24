import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import classes from "./MainContainer.module.css";
import SegmentCard from "../components/SegmentCard/SegmentCard";
import axios from "../axios";

const MainContainer = (props) => {
  const [sidebarElements, setSidebarElements] = useState([]);
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    axios
      .get(`/${props.videoId}/contexts`)
      .then((res) => setSidebarElements(res.data.map((e) => e.context)))
      .catch((err) => console.log(err));
  }, []);

  let updateSegments = (contextId, issueId) => {
    axios
      .get(
        `${props.videoId}/segments?contextId=${contextId}&issueId=${issueId}`
      )
      .then((res) => setSegments(res.data))
      .catch((err) => console.log(err));
  };

  let segmentsElement = segments.map((segment) => (
    <SegmentCard key={segment.id} baseUrl={axios.defaults.baseURL + props.videoId} {...segment} />
  ));

  return (
    <div className={classes.Container}>
      <div className={classes.Topbar}>
        <Topbar />
      </div>
      <div className={classes.Sidebar}>
        <Sidebar videoId={props.videoId} updateSegments={updateSegments} elements={sidebarElements} />
      </div>
      <div className={classes.SegmentsContainer}>
        {segmentsElement}
      </div>
    </div>
  );
};

export default MainContainer;
