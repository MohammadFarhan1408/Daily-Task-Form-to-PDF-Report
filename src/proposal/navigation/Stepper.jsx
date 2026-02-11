import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProposalDocumentPDF from "../pdf/ProposalDocumentPDF";
import { useProposalStore } from "@/store/proposalStore";
import ProposalForm from "../froms/ProposalForm";
import FinancialForm from "../froms/FinancialForm";
import GalleryForm from "../froms/GalleryForm";
import ProjectProposalForm from "../froms/ProjectProposalForm";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const proposalData = useProposalStore();

  const stepComponents = [
    ProposalForm,
    ProjectProposalForm,
    FinancialForm,
    // GalleryForm,
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
          document={<ProposalDocumentPDF data={proposalData} />}
          fileName="Proposal-Data.pdf"
          style={{ display: "none" }}
        >
          Download
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Stepper;
