import { message } from "antd";

const successMessage = (mes: string) => {
  message.success(mes);
};

const errorMessage = (mes: string) => {
  message.error(mes);
};

const warningMessage = (mes: string) => {
  message.warning(mes);
};

export { successMessage, errorMessage, warningMessage };