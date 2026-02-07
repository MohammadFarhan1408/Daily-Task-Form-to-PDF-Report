import { Document } from "@react-pdf/renderer";

import { CoverPage } from "./pages/CoverPage/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage/TableOfContentsPage";
import { SummaryPage } from "./pages/SummaryPage/SummaryPage";

import { ProjectPage } from "./pages/ProjectPage/ProjectPage";
import { ObjectivesPage } from "./pages/ObjectivesPage/ObjectivesPage";
import { BeneficiaryProfilePage } from "./pages/BeneficiaryProfilePage/BeneficiaryProfilePage";
import { BaselineEndlinePage } from "./pages/BaselineEndlinePage/BaselineEndlinePage";

import { QuantitativeImpactPage } from "./pages/QuantitativeImpactPage/QuantitativeImpactPage";
import { QualitativeImpactPage } from "./pages/QualitativeImpactPage/QualitativeImpactPage";
import { LearningOutcomesPage } from "./pages/LearningOutcomesPage/LearningOutcomesPage";
import { InstitutionalImpactPage } from "./pages/InstitutionalImpactPage/InstitutionalImpactPage";
import { SocialImpactPage } from "./pages/SocialImpactPage/SocialImpactPage";
import { EconomicImpactPage } from "./pages/EconomicImpactPage/EconomicImpactPage";
import { InnovationImpactPage } from "./pages/InnovationImpactPage/InnovationImpactPage";

import { CaseStudyPage } from "./pages/CaseStudyPage/CaseStudyPage";
import { ChallengesPage } from "./pages/ChallengesPage/ChallengesPage";
import { MonitoringEvaluationPage } from "./pages/MonitoringEvaluationPage/MonitoringEvaluationPage";

import { PhotographsPage } from "./pages/PhotographsPage/PhotographsPage";
import { BackPage } from "./pages/BackPage/BackPage";
import { SustainabilityPage } from "./pages/SustainabilityPage/SustainabilityPage";
import { BeneficiaryAndBaselinePage } from "./pages/BeneficiaryAndBaselinePage/BeneficiaryAndBaselinePage";
import { QuantitativeAndQualitativeImpactPage } from "./pages/QuantitativeAndQualitativeImpactPage/QuantitativeAndQualitativeImpactPage";
import { LearningAndInstitutionalImpactPage } from "./pages/LearningAndInstitutionalImpactPage/LearningAndInstitutionalImpactPage";
import { SocialAndInnovationImpactPage } from "./pages/SocialAndInnovationImpactPage/SocialAndInnovationImpactPage";
import { CaseStudiesAndChallengesPage } from "./pages/CaseStudiesAndChallengesPage/CaseStudiesAndChallengesPage";
import { SustainabilityAndMonitoringPage } from "./pages/SustainabilityAndMonitoringPage/SustainabilityAndMonitoringPage";

const isEmptyText = (text) => !text || text.trim() === "";

const isEmptyNumber = (n) =>
  n === "" || n === null || n === undefined || Number.isNaN(n);

const isEconomicImpactEmpty = (e) => {
  return (
    isEmptyText(e.employabilityEnhancement) &&
    isEmptyText(e.incomeOpportunities) &&
    isEmptyNumber(e.costPerBeneficiary) &&
    isEmptyNumber(e.roi)
  );
};

const ReportDocumentPDF = ({ data }) => {
  const hideEconomic = isEconomicImpactEmpty(data.economicImpact);

  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <SummaryPage />
      <ProjectPage />
      <ObjectivesPage />
      <BeneficiaryAndBaselinePage />
      <QuantitativeAndQualitativeImpactPage />
      <LearningAndInstitutionalImpactPage />
      <SocialAndInnovationImpactPage />
      <CaseStudiesAndChallengesPage />
      <SustainabilityAndMonitoringPage />
      {!hideEconomic && <EconomicImpactPage />}
      {/* <BeneficiaryProfilePage />
      <BaselineEndlinePage />
      <QuantitativeImpactPage />
      <QualitativeImpactPage />
      <LearningOutcomesPage />
      <InstitutionalImpactPage />
      <SocialImpactPage />
      <InnovationImpactPage />
      <CaseStudyPage />
      <ChallengesPage />
      <SustainabilityPage />
      <MonitoringEvaluationPage /> */}
      <PhotographsPage />
      <BackPage />
    </Document>
  );
};

export default ReportDocumentPDF;
