"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import ContactForm from "../../contact-form";
import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page({ params }: { params: { slug: string } }) {
  const [POST, setPost]: any = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://blog.eltonleao.com/wp-json/wp/v2/posts/${params.slug}`)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .then((json) => setLoading(false))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar isSolid={true} />
      <section className="py-40 px-8">
        {loading ? (
          <div className="flex justify-center">
            <FontAwesomeIcon
              size="5x"
              icon={faSpinner}
              className="spinner text-5xl"
            />
          </div>
        ) : (
          <div className="container mx-auto mb-12">
            <Typography variant="h3" color="blue-gray">
              {POST.title?.rendered}
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: POST.content?.rendered }}
            ></div>
          </div>
        )}
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
