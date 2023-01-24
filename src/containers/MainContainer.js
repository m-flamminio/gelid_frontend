import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import classes from "./MainContainer.module.css";

const MainContainer = (props) => {
  const [sidebarElements, setSidebarElements] = useState([]);
  const [segments, setSegments] = useState([]);

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
