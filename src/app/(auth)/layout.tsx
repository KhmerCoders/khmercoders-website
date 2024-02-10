import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  console.log(session);
  if (session?.session) redirect("/");

  return <div className="bg-muted h-screen pt-8">{children}</div>;
}
