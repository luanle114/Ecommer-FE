import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
// import HeaderComponent from "./components/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent";
import axios from "axios";

const App = () => {
  const fetchApi = async () => {
    const res = await axios.get(`${process.env.VITE_API_URL_BACKEND}/product/getAllProducts`)
    console.log("~ ~ res:", res);
    console.log("~ ~ process.env.VITE_API_URL_BACKEND:", process.env.VITE_API_URL_BACKEND);
  };

  useEffect(() => {
    fetchApi();
  }, []);

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
