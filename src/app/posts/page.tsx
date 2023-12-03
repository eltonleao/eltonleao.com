// components
import { Navbar, Footer } from "@/components";

import AllPosts from "../../components/allposts";

// sections
import ContactForm from "../contact-form";

export default function Campaign() {
  return (
    <>
      <Navbar isSolid={true} />
      <AllPosts></AllPosts>
      <ContactForm />
      <Footer />
    </>
  );
}
