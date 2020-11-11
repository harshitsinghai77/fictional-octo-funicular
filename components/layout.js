import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} home={true} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
