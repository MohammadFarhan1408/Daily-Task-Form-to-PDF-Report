import React, { lazy, Suspense, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDeliveryStore } from "@/store/deliveryStore";

const DeliveryBasicInfoForm = lazy(
  () => import("../forms/DeliveryBasicInfoForm"),
);
const ItemChecklistForm = lazy(() => import("../forms/ItemChecklistForm"));
const SchoolDeliveryForm = lazy(() => import("../forms/SchoolDeliveryForm"));
const SerialNumbersForm = lazy(() => import("../forms/SerialNumbersForm"));
const VerificationForm = lazy(() => import("../forms/VerificationForm"));

const DeliveryCertificatePDF = lazy(
  () => import("../pdf/DeliveryCertificatePDF"),
);

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [items, setItems] = useState([]);
  const deliveryData = useDeliveryStore();

  const stepComponents = [
    DeliveryBasicInfoForm,
    SchoolDeliveryForm,
    SerialNumbersForm,
    VerificationForm,
    ItemChecklistForm,
  ];

  const totalSteps = stepComponents.length - 1;
  const ActiveForm = stepComponents[currentStep];

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

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
        setItems={setItems}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <PDFDownloadLink
          id="pdf-download-btn"
          document={
            <DeliveryCertificatePDF data={deliveryData} items={items} />
          }
          fileName="Delivery-Certificate.pdf"
          style={{ display: "none" }}
        >
          Download
        </PDFDownloadLink>
      </Suspense>
    </div>
  );
};

export default Stepper;
