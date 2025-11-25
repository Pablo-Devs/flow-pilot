import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUauth } from "@/lib/auth-utils";

const Signup = async () => {
  await requireUauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Signup;
