"use client";
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import ContactForm from "./contact-form";

import AllPosts from "../components/allposts-mvp";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDxveYsMI1w-SMgXjnO3lakiySk2QhEMFg",
  authDomain: "eltonleao-92293.firebaseapp.com",
  projectId: "eltonleao-92293",
  storageBucket: "eltonleao-92293.appspot.com",
  messagingSenderId: "53491586414",
  appId: "1:53491586414:web:baf23c378ec2fa86c49d7f",
  measurementId: "G-DYLHE7MMBQ",
};

export default function Campaign() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    logEvent(analytics, "test_event", {
      access: "true",
    });
  }, []);

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
