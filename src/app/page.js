'use client'

import { useRouter } from 'next/navigation';
import "./globals.css";
import ProjectList from '@/components/projectList';

export default function Home() {
  const router = useRouter();
  
  return (
    <main className="">
      {/* <Cover /> */}
      <ProjectList />
    </main>
  );
}
