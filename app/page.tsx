"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  ChevronDownIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { List } from "@/components/list";
import { ListItem, ListItemProp } from "@/components/list-item";
import { cn } from "@/lib/utils";

export default function Page() {
  type projectProp = {
    id: number;
    title: string;
    description: string;
    icon: string;
  };

  const projects = [
    {
      id: 1,
      title: "Test 1",
      shortDescription: "This is a test project",
      icon: "/tf.png",
      card: {
        title: "Test 1",
        longDescription:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis, incidunt sunt beatae, quos deserunt non ea autem eaque nemo suscipit excepturi! Dignissimos enim, nemo sint inventore vitae repellendus ab.",
        banner: "/task-manager-banner.png",
        technologies: ["/nextjs-icon.png", "/mongodb-icon.png"],
        github: {
          href: "#",
          repo: "Task x",
        },
        liveDemo: "#",
      },
    },
    {
      id: 2,
      title: "Test 2",
      shortDescription: "This is a test project",
      icon: "/tf.png",
      card: {
        title: "Test 2",
        longDescription:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis, incidunt sunt beatae, quos deserunt non ea autem eaque nemo suscipit excepturi! Dignissimos enim, nemo sint inventore vitae repellendus ab.",
        banner: "/todo-banner.png",
        technologies: ["/nextjs-icon.png"],
        github: {
          href: "#",
          repo: "Task x",
        },
        liveDemo: "#",
      },
    },
    {
      id: 3,
      title: "Test 3",
      shortDescription: "This is a test project",
      icon: "/tf.png",
      card: {
        title: "Test 3",
        longDescription:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis, incidunt sunt beatae, quos deserunt non ea autem eaque nemo suscipit excepturi! Dignissimos enim, nemo sint inventore vitae repellendus ab.",
        banner: "/todo-banner.png",
        technologies: ["/nextjs-icon.png"],
        github: {
          href: "#",
          repo: "Task x",
        },
        liveDemo: "#",
      },
    },
    {
      id: 4,
      title: "Test 4",
      shortDescription: "This is a test project",
      icon: "/tf.png",
      card: {
        title: "Test 4",
        longDescription:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus debitis, incidunt sunt beatae, quos deserunt non ea autem eaque nemo suscipit excepturi! Dignissimos enim, nemo sint inventore vitae repellendus ab.",
        banner: "/todo-banner.png",
        technologies: ["/nextjs-icon.png"],
        github: {
          href: "#",
          repo: "Task x",
        },
        liveDemo: "#",
      },
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh_-_7rem)] w-full max-w-screen-sm flex-col items-center justify-start gap-4 px-4">
      <section className="mb-12 mt-24 flex flex-col items-center justify-center gap-4">
        <div className="overflow-hidden rounded-full saturate-0 transition-all duration-300 hover:saturate-100 ">
          <Image
            width={60}
            height={60}
            src="/profile-photo.jpeg"
            alt="Nuwan Perera"
          />
        </div>
        <h1 className="font-mono text-xl font-bold">Full Stack Developer</h1>
        <p className="max-w-96 text-center text-muted-foreground selection:text-primary">
          I&apos;m Nuwan Perera - Developer & ML enthusiast from Sri Lanka.
          Interested in React, NextJS, Node, Typescript, Python.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Button variant={"secondary"} size={"sm"}>
            <Link href={"#"} className="inline-flex items-center gap-2">
              <GitHubLogoIcon />
              <p>/ nuwanperera-me</p>
            </Link>
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <Link href={"#"} className="inline-flex items-center">
              <LinkedInLogoIcon />
            </Link>
          </Button>
        </div>
      </section>
      <section className="w-full space-y-2">
        <h1 className="mb-4 inline-flex items-center gap-2 text-lg font-semibold text-muted-foreground">
          <span className="text-stroke select-none text-2xl">#</span> working on
        </h1>
        <div className="h-auto w-full rounded-md sm:rounded-xl border border-border bg-gradient-to-br from-muted via-secondary to-muted p-3 sm:p-6">
          <h1 className="text-sm font-semibold inline-flex items-center mb-2">Taskify <span><ArrowTopRightIcon height={12} width={12} /></span></h1>
          <div className="w-full overflow-hidden rounded-sm">
            <Image
              className=" transition-transform duration-300"
              width={640}
              height={320}
              priority
              src="/og-image.png"
              alt="Task manager banner"
            />
          </div>
        </div>
        {/* <div>
          <div className="flex flex-col gap-2 my-4">
            <h2 className="text-lg font-semibold text-secondary-foreground">Task Manager</h2>
            <p className="text-sm font-normal text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-full overflow-hidden rounded-md border border-border">
            <Image
              className=" transition-transform duration-300 hover:scale-105"
              width={640}
              height={320}
              priority
              src="/og-image.png"
              alt="Task manager banner"
            />
          </div>
        </div> */}
      </section>
      <section className="flex w-full flex-col items-center justify-center space-y-2">
        <List title="open source projects">
          {showAllProjects
            ? projects.map((project: ListItemProp, id: number) => {
                return (
                  <ListItem
                    key={id}
                    id={project.id}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    icon={project.icon}
                    card={project.card}
                  />
                );
              })
            : projects.splice(0, 3).map((project: ListItemProp, id: number) => {
                return (
                  <ListItem
                    key={id}
                    id={project.id}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    icon={project.icon}
                    card={project.card}
                  />
                );
              })}
        </List>
        <button
          className="inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm backdrop-blur-sm hover:bg-muted active:bg-muted"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? <p>Collapse</p> : <p>View all</p>}
          <span>
            <ChevronDownIcon
              className={cn(
                showAllProjects ? "rotate-180" : "rotate-0",
                "transition-transform duration-200",
              )}
            />
          </span>
        </button>
      </section>
      <section className="flex w-full flex-col items-center justify-center space-y-2">
        <List title="articles @lts">
          {showAllProjects
            ? projects.map((project: ListItemProp, id: number) => {
                return (
                  <ListItem
                    key={id}
                    id={project.id}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    icon={project.icon}
                    card={project.card}
                  />
                );
              })
            : projects.splice(0, 3).map((project: ListItemProp, id: number) => {
                return (
                  <ListItem
                    key={id}
                    id={project.id}
                    title={project.title}
                    shortDescription={project.shortDescription}
                    icon={project.icon}
                    card={project.card}
                  />
                );
              })}
        </List>
        <button
          className="inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 text-sm backdrop-blur-sm hover:bg-muted active:bg-muted"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? <p>Collapse</p> : <p>View all</p>}
          <span>
            <ChevronDownIcon
              className={cn(
                showAllProjects ? "rotate-180" : "rotate-0",
                "transition-transform duration-200",
              )}
            />
          </span>
        </button>
      </section>
      {/* <div className="h-[200dvh] w-full"></div> */}
    </div>
  );
}
