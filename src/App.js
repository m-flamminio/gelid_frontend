import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./containers/LoginPage/LoginPage";
import MainContainer from "./containers/MainContainer";

function App(props) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (props.cookies.get("isAuth") === "true") setIsAuth(true);
  }, []);

  let redirect = isAuth ? "/home" : "/login";

  let handleAuth = (auth) => {
    setIsAuth(auth);
    props.cookies.set("isAuth", auth, { path: "/", sameSite: "lax" });
  };

  return (
    <Routes>
      {isAuth ? (
        <Route path="/home" element={<MainContainer videoId={1} />} />
      ) : (
        <Route path="/login" element={<LoginPage onAuth={handleAuth} />} />
      )}
      <Route path="*" element={<Navigate to={redirect} replace />} />
    </Routes>
  );
}

export default App;
