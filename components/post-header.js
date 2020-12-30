import Link from "next/link";
import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import utilStyles from "../styles/utils.module.css";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <a href="https://harshitsinghai77.github.io/" target="_blank">
          <Avatar name={author.name} picture={author.picture} />
        </a>
      </div>
      <div className="mb-8 lg:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
        <div className={utilStyles.lightText}>
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
