import classes from "./BaseLayout.module.css";
import Topbar from "../../components/Topbar/Topbar";
import MainContainer from "../MainContainer/MainContainer";
import GelidForm from "../../components/GelidForm/GelidForm";

const BaseLayout = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Topbar}>
        <Topbar />
      </div>
        <MainContainer videoId={1} {...props}/>
        <GelidForm {...props} />
    </div>
  );
};

export default BaseLayout;
