import { useState } from "react";

import RegisterForm from "../pages/register.jsx";
import LoginForm from "../pages/LoginForm.jsx";

export default function RegisterAndLoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
  ) : (
    <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
  );
}
