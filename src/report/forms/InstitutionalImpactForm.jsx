import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const InstitutionalImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    teacherCapacityBuilding,
    infrastructureUse,
    curriculumEnhancement,
    sustainabilityMeasures,
  } = useReportStore((state) => state.institutionalImpact);

  const updateInstitutionalImpact = useReportStore(
    (state) => state.updateInstitutionalImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Institutional Impact</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Teacher Capacity Building */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="teacherCapacityBuilding">
              Teacher Capacity Building
            </label>
            <textarea
              id="teacherCapacityBuilding"
              rows="4"
              value={teacherCapacityBuilding}
              onChange={(e) =>
                updateInstitutionalImpact(
                  "teacherCapacityBuilding",
                  e.target.value,
                )
              }
              required
              maxLength={200}
              className="inputClass resize-none"
              placeholder="Describe teacher training and capacity building..."
            />
          </div>

          {/* Infrastructure Use */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="infrastructureUse">
              Infrastructure Use
            </label>
            <textarea
              id="infrastructureUse"
              rows="4"
              value={infrastructureUse}
              onChange={(e) =>
                updateInstitutionalImpact("infrastructureUse", e.target.value)
              }
              required
              maxLength={200}
              className="inputClass resize-none"
              placeholder="Describe infrastructure utilization..."
            />
          </div>

          {/* Curriculum Enhancement */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="curriculumEnhancement">
              Curriculum Enhancement
            </label>
            <textarea
              id="curriculumEnhancement"
              rows="4"
              value={curriculumEnhancement}
              onChange={(e) =>
                updateInstitutionalImpact(
                  "curriculumEnhancement",
                  e.target.value,
                )
              }
              required
              maxLength={200}
              className="inputClass resize-none"
              placeholder="Describe curriculum improvements..."
            />
          </div>

          {/* Sustainability Measures */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="sustainabilityMeasures">
              Sustainability Measures
            </label>
            <textarea
              id="sustainabilityMeasures"
              rows="4"
              value={sustainabilityMeasures}
              onChange={(e) =>
                updateInstitutionalImpact(
                  "sustainabilityMeasures",
                  e.target.value,
                )
              }
              required
              maxLength={200}
              className="inputClass resize-none"
              placeholder="Describe sustainability measures..."
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

export default InstitutionalImpactForm;
