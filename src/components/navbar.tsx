import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
}
function NavItem({ children, href, target }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={target ? target : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar({ isSolid = false }) {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [shadow, setShadow] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        setShadow(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling || isSolid ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          variant="h6"
          color={isScrolling || isSolid ? "blue-gray" : "white"}
        >
          <Link href="/">eltonleao.dev</Link>
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling || isSolid ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/" target="_self">
            Home
          </NavItem>
          {/* <NavItem href="/about">About</NavItem> */}
          <NavItem href="#contact">Contact</NavItem>
          {/* <NavItem href="/blog/posts">DevLog</NavItem> */}
        </ul>
        <div className="hidden items-center lg:flex gap-2">
          {/* <Button
            variant="text"
            color={isScrolling || isSolid ? "gray" : "white"}
          >
            Log in
          </Button> */}
          <a href="#devlog">
            <Button color={isScrolling || isSolid ? "gray" : "white"}>
              Projects
            </Button>
          </a>
        </div>
        <IconButton
          id="navbar-mobile-menu"
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon
              strokeWidth={2}
              className="h-6 w-6 teste1"
              color={isScrolling ? "black" : "white"}
            />
          ) : (
            <Bars3Icon
              strokeWidth={2}
              className="h-6 w-6 teste2"
              color={isScrolling ? "black" : "white"}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            {/* <NavItem>About Us</NavItem> */}
            <NavItem href="/#contact">Contact</NavItem>{" "}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a href="#devlog">
              <Button color="gray">Projects</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
