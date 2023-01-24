import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import classes from "./MainContainer.module.css";
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

  return (
    <div className={classes.Container}>
      <div className={classes.Topbar}>
        <Topbar />
      </div>
      <div className={classes.Sidebar}>
        <Sidebar elements={sidebarElements} />
      </div>
      <div className={classes.SegmentsContainer}></div>
    </div>
  );
};

export default MainContainer;
