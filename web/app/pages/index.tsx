import { redirect } from "react-router";

export const loader = () => { // or `loader` to load server-side
  return redirect("/products");
};