import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const SustainabilityForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const { continuationPlan, scalabilityPotential, replicationPossibilities } =
    useReportStore((state) => state.sustainability);

  const updateSustainability = useReportStore(
    (state) => state.updateSustainability,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Sustainability</h3>
      </div>

      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Continuation Plan */}
          <div>
            <label className="labelClass" htmlFor="continuationPlan">
              Continuation Plan
            </label>
            <textarea
              id="continuationPlan"
              name="continuationPlan"
              rows={3}
              value={continuationPlan}
              onChange={(e) =>
                updateSustainability("continuationPlan", e.target.value)
              }
              required
              maxLength={225}
              className="textareaClass"
              placeholder="Describe how the project will continue..."
            />
          </div>

          {/* Scalability Potential */}
          <div>
            <label className="labelClass" htmlFor="scalabilityPotential">
              Scalability Potential
            </label>
            <textarea
              id="scalabilityPotential"
              name="scalabilityPotential"
              rows={3}
              value={scalabilityPotential}
              onChange={(e) =>
                updateSustainability("scalabilityPotential", e.target.value)
              }
              required
              maxLength={225}
              className="textareaClass"
              placeholder="Explain potential for scaling..."
            />
          </div>

          {/* Replication Possibilities */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="replicationPossibilities">
              Replication Possibilities
            </label>
            <textarea
              id="replicationPossibilities"
              name="replicationPossibilities"
              rows={3}
              value={replicationPossibilities}
              onChange={(e) =>
                updateSustainability("replicationPossibilities", e.target.value)
              }
              required
              maxLength={190}
              className="textareaClass"
              placeholder="Mention how this model can be replicated..."
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

export default SustainabilityForm;
