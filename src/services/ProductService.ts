import axios from "axios";

const ProductService = {
  getAllProducts: async () => {
    const res = await axios.get(`${process.env.VITE_API_URL_BACKEND}/product/getAllProducts`);
    return res.data;
  },
  createProduct: async (data: any) => {
    const res = await axios.post(`${process.env.VITE_API_URL_BACKEND}/product/create`, data);
    return res.data;
  }
}

export default ProductService;