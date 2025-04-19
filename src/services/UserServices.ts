import axios from "axios";

export const axiosInstance = axios.create();

const UserService = {
  loginUser: async (payload: any) => {
    try {
      const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/user/sign-in`, payload);
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  },
  logoutUser: async () => {
    try {
      const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/user/log-out`);
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  },
  signUpUser: async (payload: any) => {
    try {
      const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/user/sign-up`, payload);
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  },
  getUserDetails: async (id: string, access_token: string) => {
    try {
      const res = await axiosInstance.get(`${process.env.VITE_API_URL_BACKEND}/user/get-details/${id}`, {
        headers: {
          token: `Bearer ${access_token}`
        }
      });
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  },
  refreshToken: async () => {
    try {
      const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/user/refresh-token`, {
        withCredentials: true
      });
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  },
  updateUser: async (payload: any, id: string) => {
    try {
      const res = await axiosInstance.put(`${process.env.VITE_API_URL_BACKEND}/user/update-user/${id}`, payload, {
        headers: {
          token: `Bearer ${payload.access_token}`
        }
      });
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  }
};

export default UserService;