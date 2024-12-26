import axios from "axios";

const UserService = {
  loginUser: async (payload: any) => {
    try {
      const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/user/sign-in`, payload);
      return res.data;
    }
    catch(error) {
      console.log(error);
    }
  }
}

export default UserService;