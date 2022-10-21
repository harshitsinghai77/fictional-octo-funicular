import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function ChelseaChampionsOfEurope() {
  const videListVimeo = [
    "556866678",
    "556866751",
    "556866446",
    "556867184",
    "556867374",
    "556867233",
    "556867480",
    "556867277",
    "556867127",
    "556867058",
    "556867552",
    "556867314",
    "556867435",
  ];

  return (
    <Layout>
      <Container>
        <Intro />

        <div className="m-30 mb-24 text-7xl font-bold">
          <h1>Champions of Europe 2021</h1>
        </div>
        {videListVimeo.map((element) => (
          <div
            key={element}
            style={{ padding: "56.21% 0 0 0", position: "relative" }}
          >
            <iframe
              src={`https://player.vimeo.com/video/${element}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "80%",
              }}
              title="f6qttxZtYIdLYW7s"
            ></iframe>
          </div>
        ))}
      </Container>
    </Layout>
  );
}
