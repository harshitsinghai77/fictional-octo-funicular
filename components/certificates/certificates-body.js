import { useLayoutEffect, useRef, useState, memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const rootCertificateDirectory = "certificate/";

const CertificateCard = ({ certificates }) => {
  const ref = useRef(null);
  const [documentWidth, setDocumentWidth] = useState(550);

  useLayoutEffect(() => {
    console.log("ref.current.offsetWidth", ref.current.offsetWidth);
    let width = 550;
    if (ref.current.offsetWidth < 450) {
      width = 420;
    }
    if (ref.current.offsetWidth < 400) {
      width = 320;
    }
    setDocumentWidth(width);
  }, []);

  const RenderCertificate = () =>
    certificates.map((certificate) => {
      const filePath = rootCertificateDirectory + certificate;
      return (
        <div>
          <Document file={filePath} loading="Loading Certificate">
            <Page pageNumber={1} width={documentWidth} />
          </Document>
        </div>
      );
    });

  return (
    <div
      div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
    >
      <RenderCertificate />
    </div>
  );
};

export default memo(CertificateCard);
