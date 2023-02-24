import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoginPage from "./containers/LoginPage/LoginPage";
import MainContainer from "./containers/MainContainer";
import axios from "./axios";

function App(props) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (props.cookies.get("isAuth") === "true") setIsAuth(true);
  }, []);

  let redirect = isAuth ? "/home" : "/login";

  let handleAuth = (username, password) => {
    const searchParam = new URLSearchParams({
      username: username,
      password: password,
    });

    axios
      .get("users?" + searchParam)
      .then((res) => {
        const auth = res.data
        setIsAuth(auth);
        props.cookies.set("isAuth", auth, { path: "/", sameSite: "lax" });
      })
      .catch((err) => console.log(err));
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
