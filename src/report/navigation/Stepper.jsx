import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useReportStore } from "../../store/reportStore";
import ReportDocumentPDF from "../pdf/ReportDocumentPDF";

import ProjectForm from "../forms/ProjectForm";
import BaselineEndlineForm from "../forms/BaselineEndlineForm";
import BeneficiaryProfileForm from "../forms/BeneficiaryProfileForm";
import CaseStudyForm from "../forms/CaseStudyForm";
import ChallengesForm from "../forms/ChallengesForm";
import EconomicImpactForm from "../forms/EconomicImpactForm";
import InnovationImpactForm from "../forms/InnovationImpactForm";
import InstitutionalImpactForm from "../forms/InstitutionalImpactForm";
import LearningOutcomesForm from "../forms/LearningOutcomesForm";
import MonitoringEvaluationForm from "../forms/MonitoringEvaluationForm";
import ObjectivesForm from "../forms/ObjectivesForm";
import PhotographsForm from "../forms/PhotographsForm";
import QualitativeImpactForm from "../forms/QualitativeImpactForm";
import QuantitativeImpactForm from "../forms/QuantitativeImpactForm";
import SocialImpactForm from "../forms/SocialImpactForm";
import SustainabilityForm from "../forms/SustainabilityForm";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const storeData = useReportStore();

  const stepComponents = [
    ProjectForm,
    ObjectivesForm,
    BeneficiaryProfileForm,
    BaselineEndlineForm,
    QuantitativeImpactForm,
    QualitativeImpactForm,
    LearningOutcomesForm,
    InstitutionalImpactForm,
    SocialImpactForm,
    EconomicImpactForm,
    InnovationImpactForm,
    CaseStudyForm,
    ChallengesForm,
    SustainabilityForm,
    MonitoringEvaluationForm,
    PhotographsForm,
  ];

  const ActiveForm = stepComponents[currentStep];
  const totalSteps = stepComponents.length - 1;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePDF = () => {
    document.getElementById("pdf-download-btn")?.click();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <ActiveForm
        nextStep={nextStep}
        prevStep={prevStep}
        isLastStep={currentStep === totalSteps}
        generatePDF={generatePDF}
      />
      <div className="flex justify-center items-center mt-6 w-full">
        <PDFDownloadLink
          id="pdf-download-btn"
          document={<ReportDocumentPDF data={storeData} />}
          fileName="Report-Data.pdf"
          style={{ display: "none" }}
        >
          Download
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Stepper;
