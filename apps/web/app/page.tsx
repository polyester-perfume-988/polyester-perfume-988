import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Button } from "@/ui/Button";

export default async function Page() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex h-screen w-full items-center justify-center align-middle">
      <div className="flex min-w-96 flex-col items-center gap-2 bg-neutral-800 p-4">
        <div>
          <h1 className="text-lg text-white">Welcome to Saeki</h1>
          <p className="text-md text-neutral-500">Sign in to continue</p>
        </div>
        <SignInButton forceRedirectUrl="/dashboard" mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </div>
    </div>
  );
}
