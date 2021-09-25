import Link from "next/link";

export default function Custom404() {
  return (
    <div className="custom-404-page">
      <div>
        <h1 className="custom-404-page-heading">404</h1>
        <div className="custom-404-page-paragraph">
          <h2 className="custom-404-page-heading2">
            This page could not be found.{" "}
            <Link href="/">
              <span className="underline cursor-pointer">Go back home</span>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
