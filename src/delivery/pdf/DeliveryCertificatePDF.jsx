import { Document } from "@react-pdf/renderer";
import { CertificateCoverPage } from "./pages/CertificateCoverPage/CertificateCoverPage";
import { AnnexureItemsPage } from "./pages/AnnexureItemsPage/AnnexureItemsPage";
import { VerificationPage } from "./pages/VerificationPage/VerificationPage";
import { SerialNumbersPage } from "./pages/SerialNumbersPage/SerialNumbersPage";

const DeliveryCertificatePDF = ({ data, items }) => {
  return (
    <Document>
      <CertificateCoverPage />
      <AnnexureItemsPage items={items} />
      <VerificationPage />
      <SerialNumbersPage />
    </Document>
  );
};

export default DeliveryCertificatePDF;
