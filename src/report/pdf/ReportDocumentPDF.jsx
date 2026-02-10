import { Document } from "@react-pdf/renderer";

import { CoverPage } from "./pages/CoverPage/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage/TableOfContentsPage";
import { SummaryPage } from "./pages/SummaryPage/SummaryPage";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { BeneficiaryAndBaselinePage } from "./pages/BeneficiaryAndBaselinePage/BeneficiaryAndBaselinePage";
import { QuantitativeAndQualitativeImpactPage } from "./pages/QuantitativeAndQualitativeImpactPage/QuantitativeAndQualitativeImpactPage";
import { LearningAndInstitutionalImpactPage } from "./pages/LearningAndInstitutionalImpactPage/LearningAndInstitutionalImpactPage";
import { SocialAndInnovationImpactPage } from "./pages/SocialAndInnovationImpactPage/SocialAndInnovationImpactPage";
import { CaseStudiesAndChallengesPage } from "./pages/CaseStudiesAndChallengesPage/CaseStudiesAndChallengesPage";
import { SustainabilityAndMonitoringPage } from "./pages/SustainabilityAndMonitoringPage/SustainabilityAndMonitoringPage";
import { PhotographsPage } from "./pages/PhotographsPage/PhotographsPage";
import { BackPage } from "./pages/BackPage/BackPage";
import { ObjectiveAndEconomicImpactPage } from "./pages/ObjectiveAndEconomicImpactPage/ObjectiveAndEconomicImpactPage";

const ReportDocumentPDF = ({ data }) => {
  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <SummaryPage />
      <ProjectPage />
      <ObjectiveAndEconomicImpactPage data={data} />
      <BeneficiaryAndBaselinePage />
      <QuantitativeAndQualitativeImpactPage />
      <LearningAndInstitutionalImpactPage />
      <SocialAndInnovationImpactPage />
      <CaseStudiesAndChallengesPage />
      <SustainabilityAndMonitoringPage />
      <PhotographsPage />
      <BackPage />
    </Document>
  );
};

export default ReportDocumentPDF;
