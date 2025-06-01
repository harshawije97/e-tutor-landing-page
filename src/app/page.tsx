/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import ReviewCard from "@/components/review-card";
import Header from "@/components/header";
import { MovingCards } from "@/components/moving-cards";
import { courses } from "@/shared/constants";
import { ScrollAnimation } from "@/components/scroll-animation";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2B68FF]">
                The Ultimate Learning Hub for the Plantation Sector
              </h1>
              <p className="text-gray-600 max-w-md">
                In today&apos;s fast-paced world, knowledge is the key to growth
                and sustainability. e-tutor.lk is designed specifically for the
                plantation sector, offering a state-of-the-art Learning
                Management System to empower planters, supervisors, and field
                officers.
              </p>
              <div className="w-full flex gap-x-4">
                <div className="flex gap-x-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="font-medium">4.9 (5,000+ reviews)</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={"https://agri-copilot-v1.vercel.app/"}
                  target="_blank"
                  className="border-[#437A48] border rounded-lg pl-2 pr-4 py-2 text-white flex gap-x-2 items-center bg-[#437A48] hover:bg-green-800"
                >
                  <Image
                    src={"/agro-bot-logo.png"}
                    alt="play"
                    width={118}
                    height={36}
                    className="object-cover w-[35px]"
                  />
                  Try Agri AI
                </Link>
                <Link
                  href={"http://e-tutor.lk/lms/"}
                  target="_blank"
                  className="border-[#437A48] border rounded-lg px-4 py-2 text-[#f97316] flex gap-x-2 items-center hover:bg-green-50"
                >
                  Access
                  <Image
                    src={"/e-tutor-logo.png"}
                    alt="play"
                    width={118}
                    height={36}
                    className="object-contain"
                  />
                </Link>
              </div>

              {/* Reviews */}
              <div className="flex gap-4 pt-12">
                <ReviewCard />
                <ReviewCard />
              </div>
            </div>
            <div className="relative lg:pl-24">
              <div className="absolute top-0 right-2 rounded-full -z-10">
                <Image
                  src={"/hero-vectors.svg"}
                  alt="play"
                  width={280}
                  height={200}
                  className="object-cover"
                  priority
                />
              </div>
              <figure>
                <Image
                  src={"/hero-image.png"}
                  alt="Student with books"
                  width={500}
                  height={600}
                  className="relative z-10"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <header className="flex flex-col mb-10">
              <h2 className="text-5xl font-bold mb-8">Courses</h2>
              <p className="max-w-md">
                Comprehensive Courses: Covering a wide range of topics, from
                agronomy to management, for all levels of expertise.
              </p>
            </header>
            <div className="w-full pt-10">
              <MovingCards items={courses} speed="slow" />
            </div>
          </div>
        </section>

        {/* Agro-bot Section */}
        <section className="py-8 bg-[#F8F9FF]">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimation
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-gray-600 dark:text-white">
                    AI model trained specially for plantation sector <br />
                    <span className="text-4xl md:text-[6rem] text-[#2B68FF] font-bold mt-4 leading-none">
                      Ask AGRI AI
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src={`/bot-interface.png`}
                alt="hero"
                height={790}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ScrollAnimation>
          </div>
        </section>

        {/* LMS Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-2">
              Learning Management System
            </h2>
            <p className="text-gray-600 mb-8">
              Space is limited. Reserve your spot today!
            </p>
            <section className="w-full flex justify-center items-center mt-28">
              <div className="w-full justify-center relative flex gap-2">
                <Image
                  src="/lms-backdrop.png"
                  alt="Learning Management System on multiple devices"
                  width={1502}
                  height={599}
                  className="object-contain w-full h-[390px]"
                  priority
                />
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#437A48] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">e-tutor</h3>
              <p className="text-sm">Learning Reinvented</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
                <li>
                  <Link href="/news">News & Press</Link>
                </li>
                <li>
                  <Link href="/library">Library</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Essentials</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/agreement">User Agreement</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#">Facebook</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Newsletter</Link>
                </li>
                <li>
                  <Link href="#">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
            <p>© e-tutor - Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
