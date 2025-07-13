import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Navigation } from "@/components/Navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return (
    <div className="flex">
      <Navigation />
      <div className="grow">{children}</div>
    </div>
  );
}
