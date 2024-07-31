"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { List } from "@/components/list";
import { ListItem } from "@/components/list-item";

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
      description: "This is a test project",
      icon: "/tf.png",
    },
    {
      id: 2,
      title: "Test 2",
      description: "This is a test project",
      icon: "/tf.png",
    },
    {
      id: 3,
      title: "Test 3",
      description: "This is a test project",
      icon: "/tf.png",
    },
    {
      id: 4,
      title: "Test 4",
      description: "This is a test project",
      icon: "/tf.png",
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh_-_7rem)] w-full max-w-screen-sm flex-col items-center justify-start gap-4 p-2">
      <section className="mt-24 flex flex-col items-center justify-center gap-3">
        <div className="overflow-hidden rounded-full saturate-0 transition-all duration-300 hover:saturate-100">
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
        <div className="flex items-center justify-center gap-3">
          <Button variant={"secondary"} size={"sm"}>
            <Link href={"#"} className="inline-flex items-center gap-2">
              <GitHubLogoIcon />
              <p>/ nuwanperera-me</p>
            </Link>
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            <Link href={"#"} className="inline-flex items-center gap-2">
              <LinkedInLogoIcon />
            </Link>
          </Button>
        </div>
      </section>
      {/* <section className="w-full space-y-2">
        <h1 className="text-xl font-semibold">Working on</h1>
        <div>
          <div className="w-24 overflow-hidden rounded-md border border-border ">
            <Image
              className=" transition-transform duration-300 hover:scale-110"
              width={96}
              height={96}
              priority
              src="/todo.png"
              alt="Task manager banner"
            />
          </div>
          <div className="text-muted-foreground">
            <h2 className="text-base font-normal">Task Manager</h2>
            <p className="text-sm font-normal">
              Open source Task management web app
            </p>
          </div>
        </div>
      </section> */}
      {/* <section className="w-full space-y-2">
        <List title="open source projects">
          {showAllProjects
            ? projects.map((project: projectProp) => {
                return (
                  <ListItem
                    id={project.id}
                    title={""}
                    shortDescription={""}
                    icon={""}
                    card={{
                      title: "",
                      longDescription: "",
                      banner: "",
                      technologies: undefined,
                      href: "",
                    }}
                  />
                );
              })
            : projects.splice(0, 3).map((project: projectProp) => {
                return (
                  <ListItem
                    id={project.id}
                    title={""}
                    shortDescription={""}
                    icon={""}
                    card={{
                      title: "",
                      longDescription: "",
                      banner: "",
                      technologies: undefined,
                      href: "",
                    }}
                  />
                );
              })}
          <button onClick={() => setShowAllProjects(!showAllProjects)}>
            all
          </button>
        </List>
      </section> */}
      {/* <div className="h-[200dvh] w-full"></div> */}
    </div>
  );
}
