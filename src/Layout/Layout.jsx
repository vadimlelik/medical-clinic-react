import React, { useState } from "react";
import { AppProvider } from "../context/AppContext";
import Alert from "../Components/Alert/Alert";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  const [alertName, setAlertName] = useState("");

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <div>
      <Header />
      <button onClick={() => setAlertName("Click")}> Click</button>

      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </div>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <AppProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppProvider>
    );
  };
};
