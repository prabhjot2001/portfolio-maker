import axios from "axios";
import { SERVER_BASE_URL } from "@/constants/env";

export const logout = async () => {
  try {
    const response = await axios.post(`${SERVER_BASE_URL}/auth/sign-up`);

    if (response.status === 204 && response.statusText === "OK") {
      const res = {
        success: true,
        message: response.data.body.msg,
      };

      console.log(response);
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
