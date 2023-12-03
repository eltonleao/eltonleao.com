"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";

export function LatestBlogPosts() {
  const [BLOG_POSTS, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog.eltonleao.com/wp-json/wp/v2/posts?per_page=3&_embed")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          Latest DevLogs
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {BLOG_POSTS.map((props: any, idx) => (
          <BlogPostCard key={idx} props={props} />
        ))}
        <Card
          className="relative grid h-full w-full place-items-center overflow-hidden
            bg-black"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h3" className="mt-4" color="white">
              Discover all my articles
            </Typography>
            <Typography color="white" className="py-4 font-normal">
              I am a versatile writer who explores a wide range of genres and
              topics.
            </Typography>
            <Button
              variant="text"
              color="white"
              className="flex items-center gap-2"
            >
              read more
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-white"
              />
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default LatestBlogPosts;
