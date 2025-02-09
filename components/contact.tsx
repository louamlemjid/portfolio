"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container text-center md:max-w-3xl lg:max-w-6xl mx-auto ml-3 px-4 pb-80 pt-60">
        <h2 className="text-6xl font-semibold mb-4">
          Contact
          <span className="text-6xl text-background">.</span>
        </h2>
        <p className="text-lg mb-4">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <Link href="https://www.linkedin.com/in/louam-lemjid-466435206/" target="_blank" className="text-primary hover:underline">
            Linkedin
          </Link>{" "}
          or{" "}
          <Link href="https://twitter.com/" target="_blank" className="text-primary hover:underline">
            Twitter
          </Link>{" "}
          if that's more your speed.
        </p>
        <Link href="mailto:louam.lemjid@ensi-uma.tn">
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
            louam.lemjid@ensi-uma.tn
          </Button>
        </Link>
        <div className="flex justify-center mt-4 space-x-4">
          <Link href="https://www.linkedin.com/in/louam-lemjid-466435206/" target="_blank">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
