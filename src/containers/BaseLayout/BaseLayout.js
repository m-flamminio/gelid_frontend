import classes from "./BaseLayout.module.css";
import Topbar from "../../components/Topbar/Topbar";
import MainContainer from "../MainContainer/MainContainer";

const BaseLayout = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Topbar}>
        <Topbar />
      </div>
        {props.children}
    </div>
  );
};

export default BaseLayout;
