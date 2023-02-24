import LoginForm from "../../components/LoginForm/LoginForm";
import classes from "./LoginPage.module.css";
import logo from '../../assets/unimol.png'

const LoginPage = (props) => {
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.Card}>
            <img className={classes.Logo} src={logo} />
          <LoginForm onAuth={props.onAuth} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
