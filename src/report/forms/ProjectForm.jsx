import React, { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const ProjectForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const {
    projectTitle,
    implementingOrganization,
    partnerSponsor,
    projectDuration,
    location,
    targetBeneficiaries,
    problemStatement,
    startDate,
    endDate,
  } = useReportStore((state) => state.projectOverview);
  const updateProjectOverview = useReportStore(
    (state) => state.updateProjectOverview,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Project Overview</h3>
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
            <label className="labelClass" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) =>
                updateProjectOverview("projectTitle", e.target.value)
              }
              className="inputClass"
              maxLength={60}
              required
              placeholder="Enter a descriptive project name"
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="implementingOrganization">
              Implementing Organization
            </label>
            <input
              type="text"
              id="implementingOrganization"
              value={implementingOrganization}
              onChange={(e) =>
                updateProjectOverview(
                  "implementingOrganization",
                  e.target.value,
                )
              }
              maxLength={40}
              className="inputClass"
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="partnerSponsor">
              Partner / Sponsor
            </label>
            <input
              type="text"
              id="partnerSponsor"
              value={partnerSponsor}
              onChange={(e) =>
                updateProjectOverview("partnerSponsor", e.target.value)
              }
              maxLength={40}
              className="inputClass"
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="projectDuration">
              Project Duration (Months)
            </label>
            <input
              type="number"
              id="projectDuration"
              value={projectDuration}
              min={1}
              onChange={(e) =>
                updateProjectOverview("projectDuration", e.target.value)
              }
              className="inputClass"
              required
              placeholder="e.g. 12 Months"
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) =>
                updateProjectOverview("location", e.target.value)
              }
              maxLength={40}
              className="inputClass"
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate || ""}
              onChange={(e) =>
                updateProjectOverview("startDate", e.target.value)
              }
              className="inputClass"
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate || ""}
              onChange={(e) => updateProjectOverview("endDate", e.target.value)}
              className="inputClass"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="targetBeneficiaries">
              Target Beneficiaries
            </label>
            <input
              type="text"
              id="targetBeneficiaries"
              value={targetBeneficiaries}
              maxLength={200}
              onChange={(e) =>
                updateProjectOverview("targetBeneficiaries", e.target.value)
              }
              className="inputClass"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="problemStatement">
              Problem Statement
            </label>
            <textarea
              rows="5"
              id="problemStatement"
              value={problemStatement}
              onChange={(e) =>
                updateProjectOverview("problemStatement", e.target.value)
              }
              maxLength={1000}
              className="inputClass resize-none"
              required
              placeholder="Describe the challenges this project addresses..."
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

export default ProjectForm;
