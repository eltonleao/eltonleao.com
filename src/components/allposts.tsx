"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Hydrogen-Powered Vehicles",
    desc: "This article delves into the cutting-edge technology behind hydrogen fuel cells and their environmental benefits.",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Mental Health in the Digital Age",
    desc: "This article explores the intricate relationship between social media usage and mental health",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
  },
];

export function AllPosts() {
  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          DEVLOG
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {BLOG_POSTS.map((props, idx) => (
          <BlogPostCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default AllPosts;
