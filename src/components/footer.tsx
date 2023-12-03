import { Typography, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="pb-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 grid items-center justify-center gap-10">
          <div className="gap-2 lg:flex items-center justify-center">
            <IconButton variant="text">
              <FontAwesomeIcon className="text-lg" icon={faLinkedin} />
            </IconButton>
            <IconButton variant="text">
              <FontAwesomeIcon className="text-lg" icon={faGithub} />
            </IconButton>
            <IconButton variant="text">
              <FontAwesomeIcon className="text-lg" icon={faInstagram} />
            </IconButton>
          </div>
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} eltonleao.com
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
