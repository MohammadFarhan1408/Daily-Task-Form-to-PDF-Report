import React from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "./components/FormNavigation";

const BeneficiaryProfileForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    totalBeneficiaries,
    ageGroup,
    educationBackground,
    genderDistribution,
    geographicCoverage,
    socioEconomicBackground,
  } = useReportStore((state) => state.beneficiaryProfile);

  const updateBeneficiaryProfile = useReportStore(
    (state) => state.updateBeneficiaryProfile,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Beneficiary Profile</h3>
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
            <label className="labelClass" htmlFor="totalBeneficiaries">
              Total Beneficiaries (Direct & Indirect)
            </label>
            <input
              type="number"
              id="totalBeneficiaries"
              name="totalBeneficiaries"
              value={totalBeneficiaries}
              onChange={(e) =>
                updateBeneficiaryProfile("totalBeneficiaries", e.target.value)
              }
              required
              className="inputClass"
            />
          </div>

          <div>
            <label className="labelClass" htmlFor="ageGroup">
              Age Group
            </label>
            <input
              type="text"
              id="ageGroup"
              name="ageGroup"
              value={ageGroup}
              onChange={(e) =>
                updateBeneficiaryProfile("ageGroup", e.target.value)
              }
              required
              className="inputClass"
            />
          </div>

          <div>
            <label className="labelClass">Gender Distribution</label>

            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                placeholder="Female"
                value={genderDistribution?.female || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile("genderDistribution", {
                    ...genderDistribution,
                    female: e.target.value,
                  })
                }
                required
                className="inputClass"
              />

              <input
                type="number"
                placeholder="Male"
                value={genderDistribution?.male || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile("genderDistribution", {
                    ...genderDistribution,
                    male: e.target.value,
                  })
                }
                required
                className="inputClass"
              />

              <input
                type="number"
                placeholder="Other"
                value={genderDistribution?.other || ""}
                onChange={(e) =>
                  updateBeneficiaryProfile("genderDistribution", {
                    ...genderDistribution,
                    other: e.target.value,
                  })
                }
                required
                className="inputClass"
              />
            </div>
          </div>

          <div>
            <label className="labelClass" htmlFor="educationBackground">
              Educational Background
            </label>
            <input
              type="text"
              id="educationBackground"
              name="educationBackground"
              value={educationBackground}
              onChange={(e) =>
                updateBeneficiaryProfile("educationBackground", e.target.value)
              }
              required
              className="inputClass"
            />
          </div>

          <div>
            <label className="labelClass" htmlFor="socioEconomicBackground">
              Socio-economic Background
            </label>
            <input
              type="text"
              id="socioEconomicBackground"
              name="socioEconomicBackground"
              value={socioEconomicBackground}
              onChange={(e) =>
                updateBeneficiaryProfile(
                  "socioEconomicBackground",
                  e.target.value,
                )
              }
              required
              className="inputClass"
            />
          </div>

          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="geographicCoverage">
              Geographic Coverage
            </label>
            <textarea
              rows="4"
              id="geographicCoverage"
              name="geographicCoverage"
              value={geographicCoverage}
              onChange={(e) =>
                updateBeneficiaryProfile("geographicCoverage", e.target.value)
              }
              required
              className="inputClass resize-none"
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

export default BeneficiaryProfileForm;
