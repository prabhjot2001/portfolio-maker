import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "@/Redux/slice/authSlice";
import { login } from "@/api/Login";

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await login({ email, password });
    if (result?.success) {
      dispatch(loginAction(result?.data));
      return { success: result.success, message: result.message };
    } else {
      return { success: result?.success, message: result?.message };
    }
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return { handleLogin, handleLogout };
};
