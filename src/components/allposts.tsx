"use client";

import React, { useEffect, useState } from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import BlogPostCard from "@/components/blog-post-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AllPosts() {
  const [BLOG_POSTS, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://blog.eltonleao.com/wp-json/wp/v2/posts?_embed")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .then((data) => console.log(data))
      .then((data) => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          DEVLOG
        </Typography>
      </div>
      {loading ? (
        <div className="flex justify-center">
          <FontAwesomeIcon
            size="5x"
            icon={faSpinner}
            className="spinner text-5xl	"
          />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((props, idx) => (
            <BlogPostCard key={idx} props={props} cta={undefined} />
          ))}
        </div>
      )}
    </section>
  );
}

export default AllPosts;
