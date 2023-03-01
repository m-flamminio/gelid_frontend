import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import GelidForm from "./components/GelidForm/GelidForm";
import BaseLayout from "./containers/BaseLayout/BaseLayout";
import LoginPage from "./containers/LoginPage/LoginPage";
import MainContainer from "./containers/MainContainer/MainContainer";

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
        <Route
          path="/home"
          element={
            <BaseLayout>
              <MainContainer videoId={1} />
            </BaseLayout>
          }
        />
      ) : (
        <Route path="/login" element={<LoginPage onAuth={handleAuth} />} />
      )}
      <Route
        path="/form"
        element={
          <BaseLayout>
            <GelidForm />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Navigate to={redirect} replace />} />
    </Routes>
  );
}

export default App;
