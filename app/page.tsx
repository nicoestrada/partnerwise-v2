import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Tabs from '@/components/Tabs';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
        <SearchBar />
        <Tabs />
      </Suspense>
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}