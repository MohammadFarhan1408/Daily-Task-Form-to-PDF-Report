import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const MonitoringEvaluationForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const { dataCollectionTools, assessmentMethods, monitoringFrequency } =
    useReportStore((state) => state.monitoringEvaluation);

  const updateMonitoringEvaluation = useReportStore(
    (state) => state.updateMonitoringEvaluation,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Monitoring & Evaluation</h3>
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
            <label className="labelClass" htmlFor="dataCollectionTools">
              Data Collection Tools
            </label>
            <textarea
              id="dataCollectionTools"
              rows="3"
              value={dataCollectionTools}
              onChange={(e) =>
                updateMonitoringEvaluation(
                  "dataCollectionTools",
                  e.target.value,
                )
              }
              maxLength={180}
              required
              className="inputClass resize-none"
              placeholder="e.g. Surveys, Interviews, Observation Sheets..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="assessmentMethods">
              Assessment Methods
            </label>
            <textarea
              id="assessmentMethods"
              rows="3"
              value={assessmentMethods}
              onChange={(e) =>
                updateMonitoringEvaluation("assessmentMethods", e.target.value)
              }
              required
              maxLength={180}
              className="inputClass resize-none"
              placeholder="e.g. Pre/Post Tests, Practical Evaluations..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="monitoringFrequency">
              Monitoring Frequency
            </label>
            <textarea
              id="monitoringFrequency"
              rows="2"
              value={monitoringFrequency}
              onChange={(e) =>
                updateMonitoringEvaluation(
                  "monitoringFrequency",
                  e.target.value,
                )
              }
              required
              maxLength={175}
              className="inputClass resize-none"
              placeholder="e.g. Weekly, Monthly, Quarterly..."
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

export default MonitoringEvaluationForm;
