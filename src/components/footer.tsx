//@ts-nocheck
import { Typography, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="pb-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 grid items-center justify-center gap-10">
          <div className="gap-2 lg:flex items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/elton-leao/"
              target="_blank"
            >
              <IconButton variant="text">
                <FontAwesomeIcon className="text-lg" icon={faLinkedin} />
              </IconButton>
            </Link>
            <Link href={"https://github.com/eltonleao"} target="_blank">
              <IconButton variant="text">
                <FontAwesomeIcon className="text-lg" icon={faGithub} />
              </IconButton>
            </Link>
            <Link
              href={"https://www.instagram.com/eltonleao.dev/"}
              target="_blank"
            >
              <IconButton variant="text">
                <FontAwesomeIcon className="text-lg" icon={faInstagram} />
              </IconButton>
            </Link>
          </div>
          <Typography className="text-center font-normal !text-gray-700">
            <Link href={"https://eltonleao.com"} target="_blank">
              {" "}
              &copy; {CURRENT_YEAR} eltonleao.com
            </Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
