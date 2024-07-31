import React from "react";

import Link from "next/link";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import {
  GitHubIcon,
  InstagramIcon,
  LeetCodeIcon,
  LinkedInIcon,
  TwitterIcon,
} from "./icons";

export function NavigationDock() {
  return (
    <div className="fixed bottom-6 z-10">
      <Dock direction="middle" distance={50} magnification={60}>
        <DockIcon>
          <Link href={"#"}>
            <GitHubIcon className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"#"}>
            <LinkedInIcon className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"#"}>
            <LeetCodeIcon className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"#"}>
            <TwitterIcon className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href={"#"}>
            <InstagramIcon className="h-6 w-6 text-secondary-foreground" />
          </Link>
        </DockIcon>
        <div className="h-full w-[1px] bg-muted"></div>
        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
}
