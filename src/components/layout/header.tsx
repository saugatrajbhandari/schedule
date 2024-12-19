import React from "react";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="flex p-4 items-center justify-between">
      <h1 className="font-semibold text-3xl">Schedule</h1>
      <div className="flex gap-2">
        <Button>Create an Event</Button>
      </div>
    </nav>
  );
}

export default Header;
