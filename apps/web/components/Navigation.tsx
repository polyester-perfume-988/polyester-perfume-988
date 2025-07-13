import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const NAV_LIST: { name: string; route: string }[] = [
  { name: "Create Order", route: "/dashboard/create-order" },
  { name: "Orders", route: "/dashboard/orders" },
];

export function Navigation() {
  return (
    <nav className="flex h-screen w-64 flex-col bg-neutral-800 p-4">
      <Link
        className="mb-20 text-lg font-bold text-[#cf0] uppercase"
        href="/dashboard"
      >
        Saeki
      </Link>
      <div className="flex grow flex-col gap-2">
        {NAV_LIST.map((link) => (
          <Link className="text-white" href={link.route} key={link.route}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex w-full gap-2">
        <UserButton
          appearance={{
            elements: {
              userButtonBox: {
                color: "white",
                flexDirection: "row-reverse",
              },
            },
          }}
          showName
          userProfileMode="modal"
        />
      </div>
    </nav>
  );
}
