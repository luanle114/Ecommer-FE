import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
// import HeaderComponent from "./components/HeaderComponent";
import DefaultComponent from "./components/DefaultComponent";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import UserService, { axiosInstance } from "./services/UserServices";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/slice/userSlice";
import LoadingComponent from "./components/LoadingComponent";

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGetUserDetails = async (id: string, access_token: string) => {
    try{
      setIsLoading(true);
      const res = await UserService.getUserDetails(id, access_token);
      dispatch(updateUser({...res?.data, access_token: access_token}));
      return res;
    }
    catch(error) {
      console.log('error', error);
    }
    finally {
      setIsLoading(false);
    }
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

  axiosInstance.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    const { decoded } = handleDecoded();
    if(decoded.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken();
      config.headers['token'] = `Bearer ${data?.access_token}`;
    }
    return config;
  },  (error) => {
    return Promise.reject(error);
  });

  return (
    <React.Fragment>
      <LoadingComponent isLoading={isLoading} >
      <Router>
        <Routes>
          {routes.map((route) => {
            const isAdmin = !route.isPrivate || userData?.isAdmin;
            const DefaultLayout = route.isShowHeader ? DefaultComponent : React.Fragment;
            return (
              <Route
                key={route.path}
                path={isAdmin ? route.path : ''}
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
      </LoadingComponent>
    </React.Fragment>
  );
};

export default App;
