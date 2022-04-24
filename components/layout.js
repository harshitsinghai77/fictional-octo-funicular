import Menu from "./menu";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children, defaultSEOImage }) {
  return (
    <>
      <Meta defaultSEOImage={defaultSEOImage} />
      <div className="min-h-screen">
        <Menu preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
