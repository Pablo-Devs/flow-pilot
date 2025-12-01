import Link from "next/link";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center items-center p-6 gap-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center self-center font-medium gap-x-4">
          <Image src="/logos/logo.svg" alt="Logo" width={30} height={30} />
          Flow Pilot
        </Link>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
