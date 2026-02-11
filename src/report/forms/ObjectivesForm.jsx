import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const ObjectivesForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const {
    primaryObjectives,
    secondaryObjectives,
    shortTermOutcomes,
    longTermOutcomes,
    sdgAlignment,
  } = useReportStore((state) => state.objectives);

  const updateObjectives = useReportStore((state) => state.updateObjectives);

  return (
    <>
      <div className="header">
        <h3 className="title">Objectives</h3>
      </div>
      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="primaryObjectives">
              Primary Objectives
            </label>
            <textarea
              id="primaryObjectives"
              rows="3"
              value={primaryObjectives}
              onChange={(e) =>
                updateObjectives("primaryObjectives", e.target.value)
              }
              maxLength={250}
              required
              className="inputClass resize-none"
              placeholder="Enter primary objectives..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="secondaryObjectives">
              Secondary Objectives
            </label>
            <textarea
              id="secondaryObjectives"
              rows="3"
              value={secondaryObjectives}
              onChange={(e) =>
                updateObjectives("secondaryObjectives", e.target.value)
              }
              maxLength={250}
              required
              className="inputClass resize-none"
              placeholder="Enter secondary objectives..."
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="shortTermOutcomes">
              Short-term Outcomes
            </label>
            <textarea
              id="shortTermOutcomes"
              rows="3"
              value={shortTermOutcomes}
              onChange={(e) =>
                updateObjectives("shortTermOutcomes", e.target.value)
              }
              maxLength={190}
              required
              className="inputClass resize-none"
              placeholder="Describe short-term outcomes..."
            />
          </div>

          {/* Long Term Outcomes */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="longTermOutcomes">
              Long-term Outcomes
            </label>
            <textarea
              id="longTermOutcomes"
              rows="3"
              value={longTermOutcomes}
              onChange={(e) =>
                updateObjectives("longTermOutcomes", e.target.value)
              }
              maxLength={190}
              required
              className="inputClass resize-none"
              placeholder="Describe long-term outcomes..."
            />
          </div>

          {/* SDG Alignment */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="sdgAlignment">
              SDG Alignment
            </label>
            <input
              type="text"
              id="sdgAlignment"
              value={sdgAlignment}
              onChange={(e) => updateObjectives("sdgAlignment", e.target.value)}
              required
              maxLength={100}
              className="inputClass"
              placeholder="e.g. SDG 4 – Quality Education"
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

export default ObjectivesForm;
