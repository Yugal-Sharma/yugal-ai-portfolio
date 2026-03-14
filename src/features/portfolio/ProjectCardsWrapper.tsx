"use client";

import dynamic from "next/dynamic";

const ProjectCardsDynamic = dynamic(
  () => import("@/features/portfolio/ProjectCards").then((mod) => mod.ProjectCards),
  { ssr: false }
);

export function ProjectCardsWrapper() {
  return <ProjectCardsDynamic />;
}
