const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;
  if (value === undefined) {
    throw new Error(`Cannot find environment variable ${key}`);
  }

  return value;
};

export const JWT_ACCESS_TOKEN = getEnv("JWT_ACCESS_TOKEN");
export const JWT_REFRESH_TOKEN = getEnv("JWT_REFRESH_TOKEN");
export const PORT = getEnv("PORT");
export const SERVER_HOSTNAME = getEnv("SERVER_HOSTNAME");
