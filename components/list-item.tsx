import Image from "next/image";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { GitHubLogoIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { link } from "fs";

export type ListItemProp = {
  id: number;
  title: string;
  shortDescription: string;
  icon: string;
  filter?: string;
  card: {
    title: string;
    longDescription: string;
    banner: string;
    technologies?: string[];
    github?: {
      href: string;
      repo: string;
    };
    liveDemo?: string;
  };
};

export const ListItem = ({
  id,
  title,
  shortDescription,
  icon,
  filter,
  card,
}: ListItemProp) => {
  return (
    <li
      key={id}
      className="group flex h-auto w-full flex-col rounded-lg border border-background transition-colors duration-200 hover:border-border hover:bg-muted"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex w-full gap-4 p-4">
            <div className="overflow-hidden rounded-sm">
              <Image
                src={icon}
                width={64}
                height={64}
                alt=""
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">
                {shortDescription}
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="overflow-hidden border-none p-0 pb-4 sm:max-w-[425px]">
          <DialogHeader className="flex flex-col items-start gap-2">
            <div className="w-full rounded-sm">
              <Image
                src={card.banner}
                alt={""}
                width={525}
                height={425}
                objectFit=""
              />
            </div>
            <DialogTitle className="px-4">{card.title}</DialogTitle>
            <DialogDescription className="px-4 text-start">
              {card.longDescription}
            </DialogDescription>
            <div className="px-4 text-muted-foreground">
              <div className="mt-2 flex items-center justify-start gap-2">
                <p>Tech stack: </p>
                {card.technologies?.map((item, id) => (
                  <div className="h-5 w-5">
                    <Image
                      src={item}
                      key={id}
                      width={20}
                      height={20}
                      alt={""}
                      objectFit="contain"
                      className=""
                    />
                  </div>
                ))}
              </div>
            </div>

            {card.github && (
              <div className="flex w-full gap-2 px-4">
                {card.liveDemo && (
                  <Button variant="link" size="sm" className="w-full">
                    <Link className="inline-flex" href={card.liveDemo}>
                      Live demo <ArrowTopRightIcon />
                    </Link>
                  </Button>
                )}
                <Button className="w-full" variant="default" size="sm">
                  <Link href={card.github?.href}>
                    <p className="inline-flex items-center justify-center gap-2">
                      <GitHubLogoIcon /> / {card.github.repo}
                    </p>
                  </Link>
                </Button>
              </div>
            )}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </li>
  );
};
