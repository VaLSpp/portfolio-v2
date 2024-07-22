import Image from "next/image";
import { Inter } from "next/font/google";
import Heros from "@/components/molecules/Heros";
import WorkExperience from "@/components/molecules/WorkExperience";
import { Certifications } from "@/components/molecules/Certifications";
import React, { ReactNode, useState } from "react";
import TechStack from "@/components/molecules/TechStack";
import FormContact from "@/components/molecules/FormContact";
import Projects from "@/components/molecules/Projects";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen ${inter.className} bg-neutral-400`}>
      {/* <MouseMoveLineDrawing > */}
      <Heros />
      <WorkExperience />
      <Projects />
      <Certifications />
      <TechStack />
      <FormContact />
      {/* </MouseMoveLineDrawing> */}
      <Analytics />
    </div>
  );
}

const MAX_POINTS = 30;

const MouseMoveLineDrawing = ({ children }: { children?: ReactNode }) => {
  const [points, setPoints] = useState<string[]>([]);

  return (
    <div className="bg-slate-300"
      onMouseMove={(e) => {
        setPoints((pv) => {
          const x = e.clientX;
          const y = e.clientY;

          const pointBuffer = [...pv, `${x} ${y}`];

          if (pointBuffer.length > MAX_POINTS) {
            pointBuffer.shift();
          }

          return pointBuffer;
        });
      }}
    >
      {children}
      <svg
        className="pointer-events-none fixed left-0 top-0 h-full w-full"
        viewBox="0 0 100% 100%"
      >
        <polyline
          className="stroke-neutral-900"
          fill="none"
          strokeWidth="4"
          strokeDasharray="0"
          strokeLinecap="round"
          points={`${points.join(", ")}`}
        ></polyline>
      </svg>
    </div>
  );
};
