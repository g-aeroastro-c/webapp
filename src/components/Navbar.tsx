"use client";

import React, { useState } from "react";
import { MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (value: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={cn(
        "relative rounded-full border border-transparent dark:bg-[#17191C] dark:border-white/[0.2] bg-[#17191C] text-[#FAFAFA] shadow-input flex justify-center space-x-4 px-8 py-6",
        className
      )}
    >
      {children}
    </nav>
  );

};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <nav className="flex items-center justify-between bg-[#17191C] rounded-full px-5 py-1 shadow-lg relative">
        {/* Logo */}
        <div className="flex items-center z-20">
          <img
            src="./gaacLogo.png"
            alt="GITAM Aero Astro Club"
            className="h-20 w-20 mr-3"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu setActive={setActive} className="bg-[#17191C] text-[#FAFAFA]">
            <MenuItem
              setActive={setActive}
              active={active}
              item={
                <a
                  href="about-us"
                  onClick={() => {
                    const section = document.getElementById("about-us");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer dark:text-[#FAFAFA] hover:opacity-90"
                >
                  About Us
                </a>
              }
            />
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blogs">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem 
              setActive={setActive} 
              active={active} 
              item={
                <a
                  href="/contactUs"
                  onClick={() => {
                    const section = document.getElementById("contactUs");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer"
                >
                  Contact Us
                </a>
              }
            />
          </Menu>
        </div>
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="/signup"
            className="px-4 py-2 rounded-full bg-[#09C0F9] text-black font-semibold hover:bg-[#38d3ff] transition"
          >
            Sign Up
          </a>
          <a
            href="/signin"
            className="px-4 py-2 rounded-full border border-[#FAFAFA] text-[#FAFAFA] font-semibold hover:bg-[#09C0F9] hover:text-black transition"
          >
            Sign In
          </a>
        </div>
        {/* Burger Menu for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center z-20"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300",
              mobileOpen ? "rotate-45 translate-y-1.5" : ""
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300 my-1",
              mobileOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-all duration-300",
              mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
            )}
          />
        </button>
        {/* Mobile Slide Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[#17191C] bg-opacity-80 z-10 transition-transform duration-300 md:hidden",
            mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
          )}
          style={{ backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm bg-[#17191C] rounded-2xl shadow-xl mt-24 p-6 flex flex-col items-center space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu */}
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="text-sm grid grid-cols-1 gap-6 p-2">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
            {/* Auth Buttons */}
            <div className="flex flex-col space-y-3 w-full">
              <a
                href="/signup"
                className="px-4 py-2 rounded-full bg-[#09C0F9] text-black font-semibold hover:bg-[#38d3ff] transition text-center block"
              >
                Sign Up
              </a>
              <a
                href="/signin"
                className="px-4 py-2 rounded-full border border-[#FAFAFA] text-[#FAFAFA] font-semibold hover:bg-[#09C0F9] hover:text-black transition"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}