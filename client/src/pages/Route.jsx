import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import RegisterAndLoginForm from "../components/RegisterAndLoginForm.jsx";
import Chat from "../components/Chat/chat.jsx";

export default function Routes() {
  const { username } = useContext(UserContext);

  if (username) {
    return <Chat />;
  }

  return <RegisterAndLoginForm />;
}
