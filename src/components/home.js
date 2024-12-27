import {
  contact_icon,
  experiences,
  gmail,
  linkedin,
  more,
  projects,
  tech,
  user,
  githublogo, Leetcode, codechef,
} from "@/constants.js/assets";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import styles from "@/constants.js/styles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  gmailLink,
  twitterLink,
  linkedinLink,
  githubLink, leetcodeLink, codechefLink,
} from "@/constants.js/links";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

function NavbarLink({ text, link = "" }) {
  return (
    <>
      <Link
        className={`text-lg header-link transition hover:text-[#fe019a] m-3 p-[.9px] text-center rounded-[100px]`}
        href={link}
      >
        {text}
      </Link>
    </>
  );
}

function HomeComponent() {
  const words = [
    { text: "I", className: "text-white" },
    { text: "'m a", className: "text-white" },
    { text: "Software Developer", className: "text-pink" },
  ];
  const navLinks = [
    { text: "Home", link: "#home", icon: user },
    { text: "Skills", link: "#skills", icon: tech },
    { text: "Projects", link: "#projects", icon: projects },
    { text: "Experiences", link: "#experiences", icon: experiences },
    { text: "Contact", link: "#contact", icon: contact_icon },
  ];
  const social = [
    { text: "Linkedin", icon: linkedin, link: linkedinLink },
    { text: "Github", icon: githublogo, link: githubLink },
    { text: "Leetcode", icon: Leetcode, link: leetcodeLink },
    { text: "CodeChef", icon: codechef, link: codechefLink },
    { text: "Gmail", icon: gmail, link: gmailLink },
  ];
  const info = `Turning ideas into reality, one line of code at a time, with a passion for innovation and seamless user experiences.`;

  return (
      <div className="relative">
        <BackgroundBeams />

        <div className="flex w-full bg-black flex-col">
          <header className="p-10 relative z-10 my-2 h-14 flex items-center justify-center max-w-full">
            <div className="p-4 bg-[#0b0d0e] border-[#0e1213] border rounded-[100px] navbar_">
              {navLinks.map((navLink, index) => (
                  <NavbarLink text={navLink.text} link={navLink.link} key={index} />
              ))}
            </div>

            <div className="absolute right-1 top-2 more-icon">
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Image src={more} className="w-[32px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    style={{ marginRight: "1rem" }}
                    className="bg-[#0c0c0c] border border-[#141414] text-white shadow-md"
                >
                  {navLinks.map((navlink, index) => (
                      <Link href={navlink.link} key={index}>
                        <DropdownMenuItem className="cursor-pointer navbar_opt rounded-md">
                          <Image
                              src={navlink.icon}
                              className={`mx-1 ${index === 0 ? "" : "p-1"}`}
                          />{" "}
                          {navlink.text}
                        </DropdownMenuItem>
                      </Link>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 relative z-10">
            <section className="w-full py-20 hero">
              <div className="container flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
                {/* Left Section: Text */}
                <div className="space-y-4 text-left md:w-1/2">
                  <div className="flex flex-col items-start">
                    <h1 className={`${styles.subheading} leading-tight`}>Hola, I'm Mayank</h1>
                    <h2 className={`${styles.subheading} leading-tight`}>
                      <TypewriterEffectSmooth words={words}/>
                    </h2>
                  </div>
                  <p alt={info} className={`max-w-[600px] text-gray-500 ${styles.paragraph}`}>
                    {info}
                  </p>
                  <div className="flex items-center">
                    {social.map((app, index) => (
                        <Link href={app.link} target="blank" key={index}>
                          <Image
                              src={app.icon}
                              className={`w-[30px] ${index === 1 ? "" : "mx-1.5"}`}
                          />
                        </Link>
                    ))}
                  </div>
                  <Link
                      href="https://drive.google.com/file/d/1FERECc1lyKAoCmO-Ud_uEw3fkjQQJGAj/view?usp=sharing"
                      download="Resume-Mayank"
                      target="_blank"
                  >
                    <button className={styles.button}>My Resume</button>
                  </Link>
                </div>

                {/* Right Section: Image */}
                <div className="md:w-1/2 flex justify-center">
                  <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c83c004e-1370-4756-88e5-4071de797088/dgdq8br-09cc7ad6-a021-47a5-b0e0-917b12b0f7a7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4M2MwMDRlLTEzNzAtNDc1Ni04OGU1LTQwNzFkZTc5NzA4OFwvZGdkcThici0wOWNjN2FkNi1hMDIxLTQ3YTUtYjBlMC05MTdiMTJiMGY3YTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tqRMtE-b2QiI2nnefNxSDMJvZCcYqFmq2ccg_Xfzqb8"
                      alt="Coding Art"
                      className="rounded-lg max-w-full"
                  />
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
  );
}

export default HomeComponent;

