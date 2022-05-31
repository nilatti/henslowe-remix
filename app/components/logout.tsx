import { useLoaderData, Form } from "@remix-run/react";
const CONTAINER_STYLES = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
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

const Logout = () => {
  // getting user from loader data
  const { user } = useLoaderData();

  // displaying authenticated user data
  return (
    <div style={CONTAINER_STYLES}>
      ...
      <Form action="/logout" method="post">
        <button style={BUTTON_STYLES}>Logout</button>
      </Form>
    </div>
  );
};

export default Logout;
