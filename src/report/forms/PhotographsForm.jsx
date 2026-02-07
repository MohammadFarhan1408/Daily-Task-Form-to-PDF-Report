import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const PhotographsForm = ({ prevStep, isLastStep, generatePDF }) => {
  const photographs = useReportStore((state) => state.photographs);
  const updatePhotographs = useReportStore((state) => state.updatePhotographs);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photographs || photographs.length === 0) {
      alert("Please upload at least one photograph.");
      return;
    }
    // console.log(photographs);
    if (isLastStep) {
      generatePDF();
    }
  };

  return (
    <>
      <div className="header" style={{ marginBottom: 0 }}>
        <h3 className="title">Photographs</h3>
      </div>

      <form className="py-4 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="labelClass" htmlFor="photographs">
            Photographs
          </label>
          <input
            type="file"
            accept="image/*"
            id="photographs"
            name="photographs"
            multiple
            onChange={(e) => updatePhotographs(e.target.files)}
            className="w-full text-slate-600 font-medium text-sm bg-gray-200 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            required
          />
        </div>

        {/* Navigation */}
        <FormNavigation
          prevStep={prevStep}
          isLastStep={isLastStep}
          onGeneratePDF={handleSubmit}
        />
      </form>
    </>
  );
};

export default PhotographsForm;
