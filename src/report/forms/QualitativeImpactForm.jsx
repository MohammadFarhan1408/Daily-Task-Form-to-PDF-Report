import React from "react";
import { useReportStore } from "@/store/reportStore";
import { FaAngleDown } from "react-icons/fa6";
import FormNavigation from "./components/FormNavigation";

const QualitativeImpactForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    confidenceImprovement,
    leadershipSkills,
    teamwork,
    criticalThinking,
    testimonials,
  } = useReportStore((state) => state.qualitativeImpact);

  const updateQualitativeImpact = useReportStore(
    (state) => state.updateQualitativeImpact,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Qualitative Impact</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Confidence */}
          <div>
            <label className="labelClass" htmlFor="confidenceImprovement">
              Confidence Growth (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              id="confidenceImprovement"
              name="confidenceImprovement"
              value={confidenceImprovement || "1"}
              onChange={(e) =>
                updateQualitativeImpact(
                  "confidenceImprovement",
                  String(e.target.value),
                )
              }
              className="inputClass"
              required
            />
          </div>

          {/* Leadership */}
          <div>
            <label className="labelClass" htmlFor="leadershipSkills">
              Leadership Development
            </label>
            <div className="relative w-full">
              <select
                id="leadershipSkills"
                name="leadershipSkills"
                value={leadershipSkills}
                onChange={(e) =>
                  updateQualitativeImpact("leadershipSkills", e.target.value)
                }
                className="selectClass"
                required
              >
                <option value="" disabled>
                  Select Level
                </option>
                <option value="beginner">Beginner</option>
                <option value="developing">Developing</option>
                <option value="proficient">Proficient</option>
                <option value="advanced">Advanced</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <FaAngleDown />
              </div>
            </div>
          </div>

          {/* Teamwork */}
          <div>
            <label className="labelClass" htmlFor="teamwork">
              Collaboration & Team Participation
            </label>
            <div className="relative w-full">
              <select
                id="teamwork"
                name="teamwork"
                value={teamwork}
                onChange={(e) =>
                  updateQualitativeImpact("teamwork", e.target.value)
                }
                className="selectClass"
                required
              >
                <option value="" disabled>
                  Select Rating
                </option>
                <option value="poor">Poor</option>
                <option value="fair">Fair</option>
                <option value="good">Good</option>
                <option value="excellent">Excellent</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <FaAngleDown />
              </div>
            </div>
          </div>

          {/* Critical Thinking */}
          <div>
            <label className="labelClass" htmlFor="criticalThinking">
              Problem-Solving & Critical Thinking (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              id="criticalThinking"
              name="criticalThinking"
              value={criticalThinking || "1"}
              onChange={(e) =>
                updateQualitativeImpact(
                  "criticalThinking",
                  String(e.target.value),
                )
              }
              className="inputClass"
              required
            />
          </div>

          {/* Testimonials */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="testimonials">
              Participant / Mentor Feedback
            </label>
            <textarea
              id="testimonials"
              name="testimonials"
              value={(testimonials || []).join("\n")}
              onChange={(e) =>
                updateQualitativeImpact(
                  "testimonials",
                  e.target.value
                    .split("\n")
                    .map((t) => t.trim())
                    .filter(Boolean),
                )
              }
              rows={4}
              required
              className="textareaClass"
              placeholder="Write feedback or testimonial..."
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

export default QualitativeImpactForm;
