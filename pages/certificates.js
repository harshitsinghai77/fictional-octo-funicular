import CertificateLayout from "components/certificates/certificates-layout";
import CertificateCard from "components/certificates/certificates-body";
import { getCertificateData } from "lib/certificate-api";

export function getStaticProps() {
  const certificates = getCertificateData();
  return {
    props: {
      certificates,
    },
  };
}

export default function CertificateLogs({ certificates }) {
  return (
    <>
      <CertificateLayout>
        <div className="mt-5 mb-10">
          <p className="text-base">
            Even though I believe that certificates doesn't mean anything and
            hold no such prominence, I was required to complete these mandatory
            courses as part of the project onboarding. A developer shouldn't be
            judged basis on his/her certificates. Getting certificates doesn't
            signify expertise or in-depth knowledge, it just gives provide
            something tangible to justify one's learning.
          </p>
          <br />
          <p className="text-base">
            Why do I have certificates than? It was mandatory for me to complete
            these courses as a part of the project onboarding process, so I'm
            showcasing them just because I spend time completing them. Did I pay
            for any of the Udemy or Datacamp courses? Hell no, I would never pay
            for any course. All of them were absolutely free of cost.
          </p>
        </div>
        <CertificateCard certificates={certificates} />
      </CertificateLayout>
    </>
  );
}
