import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const rootCertificateDirectory = "certificate/";

export default function CertificateCard({ certificates }) {
  const RenderCertificate = () =>
    certificates.map((certificate) => {
      const filePath = rootCertificateDirectory + certificate;
      return (
        <div>
          <Document file={filePath} loading="Loading Certificate">
            <Page pageNumber={1} width={550} />
          </Document>
        </div>
      );
    });

  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      <RenderCertificate />
    </div>
  );
}
