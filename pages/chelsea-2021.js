import Container from "../components/container";
import SEO from "../components/seo";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Home() {
  const siteTitle = "Fictionally Irrlevant";

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

  const azpi = [
    "https://i.ibb.co/fp5XysZ/d26ec3709d1b.jpg",
    "https://i.ibb.co/gMJfXJq/a3047e887d07.jpg",
    "https://i.ibb.co/RQDhFzs/00dd91f0392a.jpg",
    "https://i.ibb.co/5FKF1Rj/9432d96634c5.jpg",
    "https://i.ibb.co/Kwh7fbD/4857e4a60367.jpg",
    "https://i.ibb.co/w4KFFxb/62229bf3fd7d.jpg",
    "https://i.ibb.co/rcvxczD/c51df9ed4fc6.jpg",
    "https://i.ibb.co/dpyP6z6/6c3240b795ec.jpg",
  ]
  const images = [
    "https://i.ibb.co/85rRKL2/4e70ea988522.jpg",
    "https://i.ibb.co/j4Vwnvk/e8878a3e7774.jpg",
    "https://i.ibb.co/zRYspvW/b19f139a3f0f.jpg",
    "https://i.ibb.co/72jxtbp/55c2ecdb675f.jpg",
    "https://i.ibb.co/hKzJD48/1a0ad50ee514.jpg",
    "https://i.ibb.co/SRHhV1n/feca5b5d66a6.jpg",
    "https://i.ibb.co/3hMFRsk/4dee4b7368a3.jpg",
    "https://i.ibb.co/6sNc3yr/6f4f82f841d0.jpg",
    "https://i.ibb.co/DgL4Fyy/a76d4001b8dc.jpg",
    "https://i.ibb.co/xMDnP9y/12765b7dc9a9.jpg",
    "https://i.ibb.co/bmrSCLx/aedcd9a9dbca.jpg",
    "https://i.ibb.co/D5D0FFG/006bf638a05c.jpg",
    "https://i.ibb.co/26Gvmz2/4dd8e4a8aff0.jpg",
    "https://i.ibb.co/KKf6vxH/8a30c12c70c8.jpg",
    "https://i.ibb.co/s6Tj8ms/05d4616fc6b4.jpg",
    "https://i.ibb.co/3yMLTgg/74b7c1dd1877.jpg",
    "https://i.ibb.co/ZLWXmRv/53ea30ba5a97.jpg",
    "https://i.ibb.co/y4yHdsr/79f2e6d04be8.jpg",
    "https://i.ibb.co/NZcmWvV/39f000e9646b.jpg",
    "https://i.ibb.co/G7wkdRK/22dcf7ca8614.jpg",
    "https://i.ibb.co/n3j6fN4/6fe4f2ba78d2.jpg",
    "https://i.ibb.co/82bD4nn/fc604b590a19.jpg",
    "https://i.ibb.co/tK5ksSG/3d8f7edbde40.jpg",
  ];
  return (
    <>
      <Layout>
        <SEO title={siteTitle} />
        <Container>
          <Intro />
         
         
          <div className="m-30 text-7xl font-bold">
            <h1>Champions of Europe 2021</h1>
          </div>
         
            {images.map((element) => (
              <div className="m-10">
                <img src={element} width="100%" />
              </div>
            ))}
         
          <div className="m-30 text-6xl">
            <h1>Captain César Azpilicueta</h1>
          </div>
          {azpi.map((element) => (
            <div className="m-10">
              <img src={element} width="100%" />
            </div>
          ))}
          
          <div className="m-30 text-6xl">
            <h1>De Bruyne 😕</h1>
            <img src="https://i.ibb.co/RShLfdc/9a391e7ff379.png" width="100%" />
          </div>

          <div className="m-30 text-6xl">
            <h1>Videos </h1>
          </div>

          {videListVimeo.map((element) => (
            <div style={{ padding: "56.21% 0 0 0", position: "relative" }}>
              <iframe
                src={`https://player.vimeo.com/video/${element}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "80%",
                  height: "80%",
                }}
                title="f6qttxZtYIdLYW7s"
              ></iframe>
            </div>
          ))}
        </Container>
      </Layout>
    </>
  );
}
