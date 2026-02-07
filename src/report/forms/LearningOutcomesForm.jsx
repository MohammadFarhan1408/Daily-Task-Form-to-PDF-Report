import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const LearningOutcomesForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    technicalSkillsGained,
    softSkillsDeveloped,
    toolsPlatformsUsed,
    handsOnLearningHours,
  } = useReportStore((state) => state.learningOutcomes);

  const updateLearningOutcomes = useReportStore(
    (state) => state.updateLearningOutcomes,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Learning & Skill Outcomes</h3>
      </div>
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="technicalSkillsGained">
              Technical Skills Gained
            </label>
            <input
              type="text"
              maxLength={100}
              id="technicalSkillsGained"
              value={technicalSkillsGained}
              onChange={(e) =>
                updateLearningOutcomes("technicalSkillsGained", e.target.value)
              }
              required
              className="inputClass"
              placeholder="e.g. Robotics, Augmented Reality, Python Programming..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="softSkillsDeveloped">
              Soft Skills Developed
            </label>
            <input
              type="text"
              maxLength={100}
              id="softSkillsDeveloped"
              value={softSkillsDeveloped}
              onChange={(e) =>
                updateLearningOutcomes("softSkillsDeveloped", e.target.value)
              }
              required
              className="inputClass"
              placeholder="e.g. Critical Thinking, Teamwork, Problem Solving..."
            />
          </div>
          <div className="md:col-span-1">
            <label className="labelClass" htmlFor="toolsPlatformsUsed">
              Tools / Platforms Used
            </label>
            <input
              type="text"
              id="toolsPlatformsUsed"
              value={toolsPlatformsUsed}
              onChange={(e) =>
                updateLearningOutcomes("toolsPlatformsUsed", e.target.value)
              }
              required
              maxLength={80}
              className="inputClass"
              placeholder="e.g. AR-based Phygital toys, STEM Kits"
            />
          </div>
          <div className="md:col-span-1">
            <label className="labelClass" htmlFor="handsOnLearningHours">
              Hands-on Learning Hours
            </label>
            <input
              type="number"
              id="handsOnLearningHours"
              value={handsOnLearningHours}
              onChange={(e) =>
                updateLearningOutcomes("handsOnLearningHours", e.target.value)
              }
              required
              min={1}
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

export default LearningOutcomesForm;
