"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// import { Button } from "@material-tailwind/react";
import {
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-20 top-0 w-full z-50 transition-all duration-300 ",
        isScrolled ? "bg-background/60 h-13 backdrop-blur-[2px] shadow-md" : "bg-transparent "
      )}
    >
      <div className="container mx-auto pl-16 pr-14 flex items-center justify-between h-16">
        <div className="flex items-center justify-start h-16">
        <Link href="https://github.com/louamlemjid" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/louam-lemjid-466435206/"
              target="_blank"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:your.email@example.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="tel:+21650144403">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </Link>
        </div>
      
        <Button variant="outline">My Resume</Button>
      </div>
    </nav>
  );
}