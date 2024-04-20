"use client";
import { Suspense, useEffect, useState } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SearchResults from '@/components/SearchResults';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
export const dynamic = 'force-dynamic'


export default function SearchPage() {
    
  return (
    <>
      <Suspense>
        <Header />
        <SearchBar />
      </Suspense>
        <SearchResults />
      <main>
        
        <Hero />
      </main>
      <Footer />
    </>
  );
}