import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const ChallengesForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const { keyChallenges, mitigationStrategies, lessonsLearned } =
    useReportStore((state) => state.challengesAndLearnings);

  const updateChallengesAndLearnings = useReportStore(
    (state) => state.updateChallengesAndLearnings,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Challenges & Learnings</h3>
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
            <label className="labelClass" htmlFor="keyChallenges">
              Key Challenges
            </label>
            <textarea
              id="keyChallenges"
              rows="4"
              value={keyChallenges}
              onChange={(e) =>
                updateChallengesAndLearnings("keyChallenges", e.target.value)
              }
              required
              maxLength={210}
              className="inputClass resize-none"
              placeholder="Describe key challenges..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="mitigationStrategies">
              Mitigation Strategies
            </label>
            <textarea
              id="mitigationStrategies"
              rows="4"
              value={mitigationStrategies}
              onChange={(e) =>
                updateChallengesAndLearnings(
                  "mitigationStrategies",
                  e.target.value,
                )
              }
              required
              maxLength={210}
              className="inputClass resize-none"
              placeholder="Describe mitigation strategies..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="lessonsLearned">
              Lessons Learned
            </label>
            <textarea
              id="lessonsLearned"
              rows="4"
              value={lessonsLearned}
              onChange={(e) =>
                updateChallengesAndLearnings("lessonsLearned", e.target.value)
              }
              required
              maxLength={175}
              className="inputClass resize-none"
              placeholder="Enter lessons learned..."
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

export default ChallengesForm;
