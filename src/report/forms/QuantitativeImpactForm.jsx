import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const QuantitativeImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    participantsTrained,
    attendanceRate,
    completionRate,
    certificationsAchieved,
    assessmentImprovement,
  } = useReportStore((state) => state.quantitativeImpact);

  const updateQuantitativeImpact = useReportStore(
    (state) => state.updateQuantitativeImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Quantitative Impact</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Participants */}
          <div>
            <label className="labelClass" htmlFor="participantsTrained">
              Number of Participants Trained
            </label>
            <input
              type="number"
              id="participantsTrained"
              name="participantsTrained"
              value={participantsTrained ?? 0}
              onChange={(e) =>
                updateQuantitativeImpact(
                  "participantsTrained",
                  Number(e.target.value),
                )
              }
              min={1}
              required
              className="inputClass"
            />
          </div>

          {/* Certifications */}
          <div>
            <label className="labelClass" htmlFor="certificationsAchieved">
              Certifications Achieved
            </label>
            <input
              type="number"
              id="certificationsAchieved"
              name="certificationsAchieved"
              value={certificationsAchieved ?? 0}
              onChange={(e) =>
                updateQuantitativeImpact(
                  "certificationsAchieved",
                  Number(e.target.value),
                )
              }
              min={1}
              required
              className="inputClass"
            />
          </div>

          {/* Attendance */}
          <div>
            <label className="labelClass" htmlFor="attendanceRate">
              Attendance / Retention Rate (%)
            </label>
            <input
              type="number"
              id="attendanceRate"
              name="attendanceRate"
              value={attendanceRate ?? 0}
              onChange={(e) =>
                updateQuantitativeImpact(
                  "attendanceRate",
                  Number(e.target.value),
                )
              }
              min={1}
              max={100}
              required
              className="inputClass"
            />
          </div>

          {/* Completion */}
          <div>
            <label className="labelClass" htmlFor="completionRate">
              Completion Rate (%)
            </label>
            <input
              type="number"
              id="completionRate"
              name="completionRate"
              value={completionRate ?? 0}
              onChange={(e) =>
                updateQuantitativeImpact(
                  "completionRate",
                  Number(e.target.value),
                )
              }
              min={1}
              max={100}
              required
              className="inputClass"
            />
          </div>

          {/* Assessment */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="assessmentImprovement">
              Improvement in Assessment Scores (%)
            </label>
            <input
              type="number"
              id="assessmentImprovement"
              name="assessmentImprovement"
              value={assessmentImprovement ?? 0}
              onChange={(e) =>
                updateQuantitativeImpact(
                  "assessmentImprovement",
                  Number(e.target.value),
                )
              }
              min={1}
              max={100}
              required
              className="inputClass"
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

export default QuantitativeImpactForm;
