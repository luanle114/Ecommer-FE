import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
// import HeaderComponent from "./components/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          {routes.map((route) => {
            const DefaultLayout = route.isShowHeader ? DefaultComponent : React.Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <DefaultLayout>
                    <route.page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
