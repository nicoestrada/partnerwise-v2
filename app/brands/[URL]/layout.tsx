import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import config from "@/config";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

//protected page to see if user hasAcccess based on stripe

export default async function LayoutPrivate({
    children,
  }: {
    children: ReactNode;
  }) {
    await connectMongo();
    const session = await getServerSession(authOptions);
    const user = await User.findById(session.user.id);

    if (!user["hasAccess"]) {
      redirect(config.auth.pricingUrl);
    }
  
    return <>{children}</>;
  }