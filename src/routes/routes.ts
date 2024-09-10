import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import OrderPage from "../pages/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductPage from "../pages/ProductPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage";

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/products',
    page: ProductPage,
    isShowHeader: true
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false
  },
  {
    path: '/product-details',
    page: ProductDetailPage,
    isShowHeader: true
  },
  {
    path: '/:type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotFoundPage
  }
]