import { useLoaderData, Form } from "@remix-run/react";
import { authenticator } from "../services/auth.server.jsx";
import Login from "../components/login.js";
import Logout from "../components/logout.js";
import { getUserByEmail } from "~/models/user.server";

const CONTAINER_STYLES = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const BUTTON_STYLES = {
  padding: "15px 25px",
  background: "#dd4b39",
  border: "0",
  outline: "none",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
};

export const loader = async ({ request }) => {
  // authenticator.isAuthenticated function returns the user object if found
  // if user is not authenticated then user would be redirected back to homepage ("/" route)
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {
    user,
  };
};

const IndexPage = () => {
  const { user } = useLoaderData();
  // console.log(getUserByEmail(user.email));
  if (!user.id) {
    <Login />;
  }
  return (
    <div>
      You're logged in!
      <br />
      <Logout />
    </div>
  );
};

export default IndexPage;
