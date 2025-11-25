import { LoginForm } from "@/features/auth/components/login-form";
import { requireUauth } from "@/lib/auth-utils";

const Login = async () => {
  await requireUauth();

  return <LoginForm />;
};

export default Login;
