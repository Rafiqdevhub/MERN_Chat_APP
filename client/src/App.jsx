import axios from "axios";
import Routes from "./pages/Route";
import { UserContextProvider } from "./pages/UserContext";

const App = () => {
  axios.defaults.baseURL = "http://localhost:5000/api";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
};

export default App;
