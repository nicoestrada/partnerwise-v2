"use client"
import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import BrandFeedLayout from "./BrandFeedLayout";
import { useEffect, useState } from "react";
import apiClient from "@/libs/api";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import { NextResponse } from "next/server";
import { useSession } from "next-auth/react";
import AppRouter from "next/dist/client/components/app-router";
import Link from "next/link";

const Hero = () => {

  return (
    
    <div>
      <div className="flex justify-center gap-2 py-8 relative">
        <h2 className="absolute font-bold text-2xl md:text-4xl tracking-tight mb-8 md:mb-12">Continue exploring brands</h2>
        <Link href="/">
          <button className="btn bg-zinc-800 mt-16 text-slate-50 m-4 hover:bg-zinc-600">Show more</button>
        </Link>
      </div>
    </div>
  
  );
};

export default Hero;
