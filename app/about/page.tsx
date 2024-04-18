import ButtonAccount from "@/components/ButtonAccount";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Problem from "@/components/Problem";
import TestimonialRating from "@/components/TestimonialRating";
import Testimonials3 from "@/components/Testimonials3";
import { authOptions } from "@/libs/next-auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
  
    return (
        <>
            <Header />
            <Problem />
            <Testimonials3 />
            <div className="flex justify-center gap-2 py-8 relative">
                <h2 className="absolute font-bold text-2xl md:text-4xl tracking-tight mb-8 md:mb-12">Create an account for free</h2>
                <Link href="/pricing">
                    <button className="btn bg-zinc-800 mt-16 text-slate-50 m-4 hover:bg-zinc-600">Get started</button>
                </Link>
            </div>
            <Footer />
        </>
    );
  }