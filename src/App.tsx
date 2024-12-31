import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
// import HeaderComponent from "./components/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import UserService, { axiosInstance } from "./services/UserServices";
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/slice/userSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleGetUserDetails = async (id: string, access_token: string) => {
    const res = await UserService.getUserDetails(id, access_token);
    dispatch(updateUser({...res?.data, access_token: access_token}));
    return res;
  };

  const handleDecoded = () => {
    let token = localStorage.getItem('access_token');
    let decoded: any = {};
    if(token && isJsonString(token)) {
      token = JSON.parse(token);
      decoded = jwtDecode(token || '');
    }
    return { decoded, token };
  };
  
  useEffect(() => {
    const { decoded, token } = handleDecoded();
    if(decoded?.id) {
      handleGetUserDetails(decoded.id, token as any);
    }
  }, []);

  axiosInstance.interceptors.response.use(async (response) => {
    const currentTime = new Date();
    const { config } = response;
    const { decoded } = handleDecoded();
    if(decoded.exp * 1000 < currentTime.getTime()) {
      const data = await UserService.refreshToken();
      config.headers['token'] = `Bearer ${data?.access_token}`;
    }
    return response;
  },  (error) => {
    return Promise.reject(error);
  });

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
