"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  MailIcon,
  MapPin,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

const ResumePage = () => {
  return (
    <main className={`min-h-screen bg-[#faf7ef] text-[#1e1e1e] ${inter.className}`}>
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-[#0c0c0c] px-6 py-3 text-[#faf7ef] shadow-md">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          Shubhi Maurya
        </h1>
        <Button size="sm" variant="secondary" className="gap-2">
          <Download className="h-4 w-4" /><a href="/Shubhi-3006.pdf"> Download CV</a>
        </Button>
      </header>

      {/* Hero section */}
      <section
        id="about"
        className="relative grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-[1fr_320px] lg:px-24 bg-[repeating-linear-gradient(180deg,_#FFF4E0_0px,_#FFF4E0_500px,_#344E41_500px,_#344E41_1000px)]"
      >
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Hello,<br /> I’m Shubhi !
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-[black]">
            I’m a self-taught Full Stack Web Developer based in India, driven by a love for building clean, user-focused digital experiences. From responsive UI design to scalable backend systems, I enjoy crafting seamless web solutions using the MERN stack, with a strong eye for detail and performance.
        </p>
          <Button
            asChild
            className="rounded-full bg-red-500 px-6 py-5 text-base font-bold shadow-lg hover:bg-red-600"
          >
            <a href="https://www.linkedin.com/in/shubhi-maurya-374539258/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Button>
             <Button
            asChild
            className="rounded-full bg-red-500 px-6 py-5 text-base font-bold shadow-lg m-2 hover:bg-red-600"
          >
            <a href="https://github.com/Shubhi-03" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          {/* Education */}
          <div className="mt-10 space-y-4">
            <h3 className="text-3xl font-bold text-[#FFB703]">Education</h3>
            <ul className="space-y-3 text-[white]">
              {[
                {
                  year: "2022 - 2026",
                  degree: "Kamla Nehru Institute of Technology, Sultanpur",
                },
                {
                  year: "2021",
                  degree: "Intermediate, CBSE",
                },
                {
                  year: "2019",
                  degree: "HighSchool, CBSE",
                },
              ].map((edu) => (
                <li key={edu.year} className="flex items-start gap-4">
                  <GraduationCap className="mt-1 h-4 w-4 text-red-500" />
                  <div>
                    <p className="font-semibold">{edu.degree}</p>
                    <span className="text-sm text-[white]">{edu.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          {/* <div className="relative mt-10 space-y-4">
            <h3 className="text-3xl font-bold">Experience</h3>
            <Card className="border-2 border-yellow-400/80 bg-yellow-50 shadow-lg">
              <CardContent className="space-y-4 py-6">
                {[
                  {
                    year: "2025",
                    role: "Web Development Intern",
                    company: "InsideOut Consult",
                  }
                ].map((exp) => (
                  <div
                    key={exp.company}
                    className="grid grid-cols-[80px_1fr] items-start gap-4"
                  >
                    <span className="text-sm font-medium text-[#666]">{exp.year}</span>
                    <div>
                      <p className="font-semibold">
                        {exp.role} @ {exp.company}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Mern</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">AWS</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div> */}

          {/* Activities */}
          <div className="mt-10 space-y-4">
            <h3 className="text-3xl font-bold text-[#FFB703]">Projects</h3>
            <ul className="space-y-3">
              {[
                { name: "Eavy", detail: "Travel Agency and Accommodation Management for event", link:"https://github.com/Shubhi-03/Travel-Agency-and-Accommodation-Management-for-event-project"  },
                { name: "Did you mean?", detail: "JavaScript utility to suggest the closest string", link: "https://github.com/Shubhi-03/did_u_mean-" },
                { name: "GoodBingesGPT", detail: "Frontend for Movie Recommendation system", link: "https://github.com/Shubhi-03/goodBinges-gpt" },
              ].map((act) => (
                <li key={act.detail} className="flex items-start gap-4">
                  <Briefcase className="mt-1 h-4 w-4 text-red-500" />
                  <div>
                    <a
                    href={act.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline text-blue-600"
                    ><p className="font-semibold">{act.name}</p>
                    </a>
                    <span className="text-sm text-[white]">{act.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="relative space-y-8 md:sticky md:top-20">
          {/* Profile */}
          <div className="absolute inset-0 z-0 -left-48 top-50 flex flex-col items-center justify-center gap-4 text-[12vw] font-extrabold text-yellow-300/20  ">
    <span className="leading-none">RESUME</span>
    <span className="leading-none">RESUME</span>
    <span className="leading-none">RESUME</span>
  </div>
          <div className="relative overflow-hidden">
            <Image
              src="/icons/profile.png"
              alt="Han Nguyen profile photo"
              width={800}
              height={1000}
              className="h-full w-full object-cover shadow-xl"
            />
            <div className="border-none bg-[#0c0c0c] text-[#faf7ef] shadow-xl">
            <div className="space-y-2 py-1">
              <h4 className="text-center text-xl font-bold tracking-widest">Contact</h4>
                <p className="flex items-center gap-3 p-1">
                  <MailIcon className="h-4 w-4 text-red-500" /> mauryashubhi03@gmail.com
                </p>
                <p className="flex items-center gap-3 p-1">
                  <MapPin className="h-4 w-4 text-red-500" /> India
                </p>
            </div>
          </div>
          </div>
          
          <div>

          </div>
          {/* Technical skills */}
          <Card className="relative shadow-lg">
  <CardContent className="space-y-6 py-6">
    <h4 className="text-xl font-bold">Technical skills</h4>
    {/* Coding Skills */}
    <div>
      <div className="mt-2 flex flex-wrap gap-3 items-center">
  {[
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'SQL', icon: '/icons/sql.png' },
    { name: 'MongoDB', icon: '/icons/mongodb.png' },
    { name: 'Node.js', icon: '/icons/node.png' },
    { name: 'Next.js', icon: '/icons/nextjs.png' },
  ].map((skill) => (
    <Image
      key={skill.name}
      src={skill.icon}
      alt={skill.name}
      width={48}
      height={48}
    />
  ))}
</div>

    </div>
  </CardContent>
</Card>

          {/* Experience */}
          
            <Card className="relative border-2 border-yellow-400/80 bg-yellow-50 shadow-lg">
              <CardContent className="space-y-4 py-6">
                <h4 className="text-xl font-bold">Experience</h4>
                {[
                  {
                    year: "2025",
                    role: "Web Development Intern",
                    company: "InsideOut Consult",
                  }
                ].map((exp) => (
                  <div
                    key={exp.company}
                    className="grid grid-cols-[80px_1fr] items-start gap-4"
                  >
                    <span className="text-sm font-medium text-[#666]">{exp.year}</span>
                    <div>
                      <p className="font-semibold">
                        {exp.role} @ {exp.company}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">Mern</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">AWS</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          {/* Social links */}
          <div className="flex justify-center gap-4 text-[#1e1e1e]">
            <Link href="https://github.com/Shubhi-03" target="_blank" aria-label="GitHub">
              <Github className="h-6 w-6 hover:text-red-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/shubhi-maurya-374539258/" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-red-500" />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
export default ResumePage