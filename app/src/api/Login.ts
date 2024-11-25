import { SERVER_BASE_URL } from "@/constants/env";
import axios from "axios";

type loginPropType = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: loginPropType) => {
  try {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/sign-in`, {
      email: email,
      password: password,
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
