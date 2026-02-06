import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const InnovationImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const { newTechnologies, innovationProjects, research } = useReportStore(
    (state) => state.innovationImpact,
  );

  const updateInnovationImpact = useReportStore(
    (state) => state.updateInnovationImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Innovation Impact</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* New Technologies */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="newTechnologies">
              New Technologies Introduced
            </label>
            <textarea
              id="newTechnologies"
              rows="4"
              value={newTechnologies}
              onChange={(e) =>
                updateInnovationImpact("newTechnologies", e.target.value)
              }
              required
              className="inputClass resize-none"
              placeholder="Describe new technologies..."
            />
          </div>

          {/* Innovation Projects */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="innovationProjects">
              Innovation Projects
            </label>
            <textarea
              id="innovationProjects"
              rows="4"
              value={innovationProjects}
              onChange={(e) =>
                updateInnovationImpact("innovationProjects", e.target.value)
              }
              required
              className="inputClass resize-none"
              placeholder="Describe innovation projects..."
            />
          </div>

          {/* Research */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="research">
              Research & Development
            </label>
            <textarea
              id="research"
              rows="4"
              value={research}
              onChange={(e) =>
                updateInnovationImpact("research", e.target.value)
              }
              required
              className="inputClass resize-none"
              placeholder="Describe research activities..."
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

export default InnovationImpactForm;
