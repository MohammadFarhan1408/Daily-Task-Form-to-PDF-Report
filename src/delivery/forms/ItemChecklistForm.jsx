import { useState } from "react";
import { useDeliveryStore } from "@/store/deliveryStore";
import FormNavigation from "../navigation/FormNavigation";
import { useExcelParser } from "../hooks/useExcelParser";

const ItemChecklistForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
  setItems,
}) => {
  // const { itemChecklistMeta } = useDeliveryStore(); // if you keep any small meta
  const [localItems, setLocalItems] = useState([]);

  const { parseFile, isProcessing } = useExcelParser((items) => {
    setLocalItems(items); // ✅ store locally, not in Zustand
    setItems(items); // lift to parent if needed
  });

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("No file selected.");
      return;
    }
    parseFile(file);
  };

  const handleNext = () => {
    if (localItems.length === 0) {
      alert("Please upload an Excel file before continuing.");
      return;
    }
    nextStep();
  };

  return (
    <>
      <div className="header">
        <h3 className="title">Item Checklist</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="labelClass">Upload Item List (Excel)</label>
            <input
              type="file"
              className="fileInputClass"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
            />
          </div>
        </div>

        {isProcessing && (
          <p className="text-sm text-gray-500 mt-2">Processing...</p>
        )}

        <FormNavigation
          prevStep={prevStep}
          nextStep={handleNext}
          isLastStep={isLastStep}
          onGeneratePDF={generatePDF}
        />
      </form>
    </>
  );
};

export default ItemChecklistForm;
