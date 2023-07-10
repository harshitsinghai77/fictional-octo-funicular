import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, src, id, height, width }) {
  const image = (
    <img
      src={src}
      data-src={src}
      srcSet={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-small object-contain", {
        "hover:shadow-medium transition-shadow duration-200 max-h-82": id,
      })}
      layout="responsive"
      width={width}
      height={height}
    />
  );
  return (
    <div className="sm:mx-0">
      {id ? (
        <Link as={`/posts/${id}`} href="/posts/[id]">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
