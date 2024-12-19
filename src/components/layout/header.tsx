"use client";

import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { BadgeCheck } from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
  const { push } = useRouter();

  return (
    <nav className="flex p-4 items-center justify-between">
      <Link href={"/"} className="font-semibold text-3xl">
        Schedule
      </Link>
      <div className="flex gap-4">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={"/create-event"}
        >
          Create Event
        </Link>

        <SignedOut>
          <SignInButton forceRedirectUrl={"/dashboard"}>
            <Button variant={"secondary"}>SignIn</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Event"
                labelIcon={<BadgeCheck size={16} />}
                onClick={() => push("/events")}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Header;
