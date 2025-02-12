"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="mt-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn(" max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <p>Home</p>
        <p>About</p>
        <p>Featured</p>
        <p>Tags</p>
        <p>Login</p>
        <p>Contact Us</p>
      </Menu>
    </div>
  );
}
