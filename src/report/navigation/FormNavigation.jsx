import React from "react";

const FormNavigation = ({ prevStep, isLastStep = false, onGeneratePDF }) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={prevStep}
        className="px-6 py-2 rounded-md bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
      >
        Back
      </button>

      {isLastStep ? (
        <button
          type="submit"
          onClick={onGeneratePDF}
          className="px-6 py-2 rounded-md bg-[#0F172A] text-white font-semibold text-sm"
        >
          Generate PDF
        </button>
      ) : (
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#0F172A] text-white font-semibold text-sm"
        >
          Next Step
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
