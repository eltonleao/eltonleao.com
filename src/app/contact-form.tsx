"use client";

import React, { useRef } from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, TicketIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const form: any = useRef(null);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    console.log(name, email, message);
    Swal.showLoading();
    axios
      .post("https://api.eltonleao.com/v1/index.php", {
        action: "send-contato-site",
        data: {
          name: name,
          email: email,
          message: message,
        },
      })
      .then((response) => {
        //clear form
        form.current.reset();
        Swal.fire({
          confirmButtonColor: "#333333",
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while sending your message!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }

  return (
    <section id="contact" className="px-8 pt-20">
      <div className="container mx-auto mb-5 md:mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Let`s keep in touch!
        </Typography>
        <Typography variant="lead" className="mx-auto !text-gray-500">
          Any questions or remarks? Just write a message!
        </Typography>
      </div>
      <div className="container mx-auto">
        <Card shadow={true} className="border border-gray/50">
          <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
            <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-8 grid gap-4">
                  {/* @ts-ignore */}
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Name"
                    name="name"
                    placeholder="John"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  type="email"
                  name="first-name"
                  placeholder="john.h.watson@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="first-name"
                  containerProps={{
                    d: "!min-w-full mb-10 md:mb-28",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    type="submit"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
            <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and I will get back to you right away.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <img src="https://flagsapi.com/BR/flat/16.png"></img>
                  +55 (24) 98845 7461{" "}
                </Typography>
              </div>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Link href={"mailto:eltonleao.dev@gmail.com"}>
                  <Typography variant="h6" color="white" className="mb-2">
                    <img src="https://flagsapi.com/US/flat/16.png"></img>
                    +1 (470) 210 4850
                  </Typography>
                </Link>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Link href={"mailto:eltonleao.dev@gmail.com"}>
                  <Typography variant="h6" color="white" className="mb-2">
                    eltonleao.dev@gmail.com
                  </Typography>
                </Link>
              </div>
              <div className="flex items-center gap-5">
                <Link
                  href={"https://www.linkedin.com/in/elton-leao/"}
                  target="_blank"
                >
                  <IconButton variant="text" color="white">
                    <FontAwesomeIcon className="text-lg" icon={faLinkedin} />
                  </IconButton>
                </Link>
                <Link href={"https://github.com/eltonleao"} target="_blank">
                  <IconButton variant="text" color="white">
                    <FontAwesomeIcon className="text-lg	" icon={faGithub} />
                  </IconButton>
                </Link>
                <Link
                  href={"https://instagram.com/eltonleao.dev"}
                  target="_blank"
                >
                  <IconButton variant="text" color="white">
                    <FontAwesomeIcon className="text-lg" icon={faInstagram} />
                  </IconButton>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default ContactForm;
