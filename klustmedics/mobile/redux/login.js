import { loginSuccess } from "./userSlice";
import { axio, request } from "../utils/request";

export const loginUser = async ({ email, activation_code }, dispatch) => {
  console.log(email, activation_code);
  const response = await axio.post("patient/auth/login", {
    email,
    password: activation_code,
  });
  const success = await response.data;

  dispatch(loginSuccess(success));
};
