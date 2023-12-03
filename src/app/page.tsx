// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import ContactForm from "./contact-form";

import AllPosts from "../components/allposts-mvp";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <LatestBlogPosts /> */}
      <AllPosts></AllPosts>
      <ContactForm />
      <Footer />
    </>
  );
}
