'use client'

import { useRouter } from 'next/navigation';
import "./globals.css";
import ProjectList from '@/components/projectList';
import CursorCircle from "@/components/cursorCircle";
import PhotoGallery from '@/components/photoGallery';

export default function Home() {
  const router = useRouter();
  
  return (
    <main className="">
      {/* <Cover /> */}
      <CursorCircle />
      <ProjectList />
      {/* <PhotoGallery /> */}
    </main>
  );
}
