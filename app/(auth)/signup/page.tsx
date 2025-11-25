import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUauth } from "@/lib/auth-utils";

const Signup = async () => {
  await requireUauth();

  return <RegisterForm />;
};

export default Signup;
