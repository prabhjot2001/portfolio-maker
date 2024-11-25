import { SERVER_BASE_URL } from "@/constants/env";
import axios from "axios";

type registerPropType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}: registerPropType) => {
  try {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/sign-up`, {
      name: `${firstName} ${lastName}`,
      email,
      password,
      confirmPassword,
    });

    if (response.status === 200 && response.statusText === "OK") {
      const res = {
        success: true,
        message: response.data.body.msg,
        // data: response.data.data,
      };
      return res;
    }
    if (response.status === 400) {
      return { success: false, message: response.data.body.msg };
    }
  } catch (error: any) {
    // console.log(error);
    return {
      success: false,
      message:
        error.response?.data?.body?.msg || "An unexpected error occurred",
    };
  }
};
