'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./globals.css";
import '@animxyz/core'
import Cover from '@/components/cover';
import ProjectList from '@/components/projectList';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <main className="">
      {/* <Cover /> */}
      <ProjectList />
    </main>
  );
}
