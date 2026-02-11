import { Document } from "@react-pdf/renderer";
import { FinancialProposalPage } from "./pages/FinancialProposalPage/FinancialProposalPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage/TableOfContentsPage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { AboutStembotixPage } from "./pages/AboutStembotixPage/AboutStembotixPage";
import { ProposalPage } from "./pages/ProposalPage/ProposalPage";
import { CoverPage } from "./pages/CoverPage/CoverPage";
import { ProjectProposalPage } from "./pages/ProjectProposalPage/ProjectProposalPage";
import { BackPage } from "./pages/BackPage/BackPage";

const ProposalDocumentPDF = () => {
  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <ProposalPage />
      <AboutStembotixPage />
      <ProjectProposalPage />
      <FinancialProposalPage />
      <GalleryPage />
      <BackPage />
    </Document>
  );
};

export default ProposalDocumentPDF;
