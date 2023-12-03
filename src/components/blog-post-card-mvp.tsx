import React from "react";
import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function BlogPostCard({ props }: any) {
  // const url = /blog/${props.id};
  const url = props.acf.external_link ? props.acf.external_link : "";
  const imageURL =
    props._embedded &&
    props._embedded["wp:featuredmedia"] &&
    props._embedded["wp:featuredmedia"][0].source_url
      ? props._embedded["wp:featuredmedia"][0].source_url
      : "";
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-52">
        <Link href={url} target="_blank">
          <Image
            width={768}
            height={768}
            src={imageURL}
            alt={props.title.rendered}
            className="h-full w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={url}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {props.title.rendered}
          </Typography>
        </a>
        <Typography className="mb-3 font-normal !text-gray-500">
          <span
            dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}
          ></span>
        </Typography>
        {url && (
          <Link href={url} target="_blank">
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Check it out
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </Link>
        )}
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
