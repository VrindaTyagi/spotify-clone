import fetcher from "./fetcher";

export const auth = (
  mode: "signup" | "signin",
  body: { email: string; password: string }
) => {
  return fetcher(`/${mode}`, body);
};
