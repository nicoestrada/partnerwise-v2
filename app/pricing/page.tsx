import ButtonAccount from "@/components/ButtonAccount";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
  
    return (
        <>
            <Header />
            <Pricing />
            <Footer />
        </>
    );
  }