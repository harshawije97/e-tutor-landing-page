"use client";

import React from 'react'
import { HomeIcon, BookOpen, Video } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-[#437A48] text-white px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6 gap-x-4">
            <Link href="/" className="text-2xl font-semibold">
              e-tutor
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="hover:text-white/90 flex items-end justify-center gap-x-2"
              >
                <HomeIcon />
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-white/90 flex items-end justify-center gap-x-2"
              >
                <Video />
                Courses
              </Link>
              <Link
                href="/exams"
                className="hover:text-white/90 flex items-end justify-center gap-x-2"
              >
                <BookOpen />
                Exams
              </Link>
            </nav>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white/90">
              About us
            </Link>
            <Link href="#" className="hover:text-white/90">
              Contact us
            </Link>
          </div>
        </div>
      </header>
  )
}

export default Header