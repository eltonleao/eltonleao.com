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

export function BlogPostCard({ props }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-52">
        <Link href={`/blog/${props.id}`}>
          <Image
            width={768}
            height={768}
            src={props._embedded["wp:featuredmedia"][0].source_url}
            alt={props.title.rendered}
            className="h-full w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={`/blog/${props.id}`}
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
        <Link href={`/blog/${props.id}`}>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
          >
            read more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;
