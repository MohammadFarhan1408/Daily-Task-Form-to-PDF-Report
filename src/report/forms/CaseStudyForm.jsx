import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const CaseStudyForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const {
    beneficiaryBackground,
    interventionDetails,
    outcomeAchieved,
    testimonial,
  } = useReportStore((state) => state.caseStudy);

  const updateCaseStudy = useReportStore((state) => state.updateCaseStudy);

  return (
    <>
      <div className="header">
        <h3 className="title">Case Study</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Beneficiary Background */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="beneficiaryBackground">
              Beneficiary Background
            </label>
            <textarea
              rows="4"
              id="beneficiaryBackground"
              value={beneficiaryBackground}
              onChange={(e) =>
                updateCaseStudy("beneficiaryBackground", e.target.value)
              }
              required
              maxLength={225}
              className="inputClass resize-none"
              placeholder="Enter beneficiary background..."
            />
          </div>

          {/* Intervention Details */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="interventionDetails">
              Intervention Details
            </label>
            <textarea
              rows="4"
              id="interventionDetails"
              value={interventionDetails}
              onChange={(e) =>
                updateCaseStudy("interventionDetails", e.target.value)
              }
              required
              maxLength={225}
              className="inputClass resize-none"
              placeholder="Describe intervention..."
            />
          </div>

          {/* Outcome Achieved */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="outcomeAchieved">
              Outcome Achieved
            </label>
            <textarea
              rows="4"
              id="outcomeAchieved"
              value={outcomeAchieved}
              onChange={(e) =>
                updateCaseStudy("outcomeAchieved", e.target.value)
              }
              required
              maxLength={200}
              className="inputClass resize-none"
              placeholder="Enter outcomes..."
            />
          </div>

          {/* Testimonial */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="testimonial">
              Testimonial
            </label>
            <textarea
              rows="4"
              id="testimonial"
              value={testimonial}
              onChange={(e) => updateCaseStudy("testimonial", e.target.value)}
              required
              maxLength={250}
              className="inputClass resize-none"
              placeholder="Enter testimonial..."
            />
          </div>
        </div>
        <FormNavigation
          prevStep={prevStep}
          nextStep={nextStep}
          isLastStep={isLastStep}
          onGeneratePDF={generatePDF}
        />
      </form>
    </>
  );
};

export default CaseStudyForm;
