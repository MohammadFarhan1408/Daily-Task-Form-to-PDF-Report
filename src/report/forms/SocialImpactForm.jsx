import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const SocialImpactForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const {
    inclusionAndEquity,
    communityEngagement,
    awarenessPrograms,
    digitalDivideReduction,
  } = useReportStore((state) => state.socialImpact);

  const updateSocialImpact = useReportStore(
    (state) => state.updateSocialImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Social Impact</h3>
      </div>

      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Inclusion & Equity */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="inclusionAndEquity">
              Inclusion & Equity
            </label>
            <input
              type="text"
              id="inclusionAndEquity"
              name="inclusionAndEquity"
              value={inclusionAndEquity}
              onChange={(e) =>
                updateSocialImpact("inclusionAndEquity", e.target.value)
              }
              maxLength={80}
              required
              className="textareaClass"
              placeholder="Describe inclusion and equity impact..."
            />
          </div>

          {/* Community Engagement */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="communityEngagement">
              Community Engagement
            </label>
            <input
              type="text"
              id="communityEngagement"
              name="communityEngagement"
              value={communityEngagement}
              onChange={(e) =>
                updateSocialImpact("communityEngagement", e.target.value)
              }
              maxLength={80}
              required
              className="textareaClass"
              placeholder="Describe community participation or outreach..."
            />
          </div>

          {/* Awareness Programs */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="awarenessPrograms">
              Awareness Programs
            </label>
            <textarea
              id="awarenessPrograms"
              name="awarenessPrograms"
              rows={3}
              value={awarenessPrograms}
              onChange={(e) =>
                updateSocialImpact("awarenessPrograms", e.target.value)
              }
              required
              maxLength={120}
              className="textareaClass"
              placeholder="Mention campaigns, workshops, or seminars..."
            />
          </div>

          {/* Digital Divide Reduction */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="digitalDivideReduction">
              Digital Divide Reduction
            </label>
            <textarea
              id="digitalDivideReduction"
              name="digitalDivideReduction"
              rows={3}
              value={digitalDivideReduction}
              onChange={(e) =>
                updateSocialImpact("digitalDivideReduction", e.target.value)
              }
              required
              maxLength={120}
              className="textareaClass"
              placeholder="Explain how digital access improved..."
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

export default SocialImpactForm;
