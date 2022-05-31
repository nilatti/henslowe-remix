import { Form } from "@remix-run/react";
import { SocialsProvider } from "remix-auth-socials";
import type { LinksFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";

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

const Login = () => {
  const [searchParams] = useSearchParams();
  return (
    <Form
      method="post"
      action={`/auth/${SocialsProvider.GOOGLE}`}
      style={CONTAINER_STYLES}
    >
      <input
        type="hidden"
        name="redirectTo"
        value={searchParams.get("redirectTo") ?? undefined}
      />
      <button style={BUTTON_STYLES}>Login with Google</button>
    </Form>
  );
};

export default Login;
