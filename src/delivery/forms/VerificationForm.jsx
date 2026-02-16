import React from "react";
import { useDeliveryStore } from "@/store/deliveryStore";
import FormNavigation from "../navigation/FormNavigation";

const VerificationForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const {
    schoolAuthorityName,
    schoolAuthorityDesignation,
    stembotixRepresentativeName,
    yuvaCoordinatorName,
    verificationDate,
  } = useDeliveryStore((state) => state.verification);

  const updateVerification = useDeliveryStore(
    (state) => state.updateVerification,
  );

  return (
    <>
      <div className="header">
        <h3 className="title">Verification and Authorization</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="labelClass" htmlFor="schoolAuthorityName">
              School Authority Name
            </label>
            <input
              type="text"
              id="schoolAuthorityName"
              className="inputClass"
              value={schoolAuthorityName}
              onChange={(e) =>
                updateVerification("schoolAuthorityName", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="schoolAuthorityDesignation">
              School Authority Designation
            </label>
            <input
              type="text"
              id="schoolAuthorityDesignation"
              className="inputClass"
              value={schoolAuthorityDesignation}
              onChange={(e) =>
                updateVerification("schoolAuthorityDesignation", e.target.value)
              }
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="stembotixRepresentativeName">
              Stembotix Representative Name
            </label>
            <input
              type="text"
              id="stembotixRepresentativeName"
              className="inputClass"
              value={stembotixRepresentativeName}
              onChange={(e) =>
                updateVerification(
                  "stembotixRepresentativeName",
                  e.target.value,
                )
              }
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="yuvaCoordinatorName">
              Yuva Coordinator Name
            </label>
            <input
              type="text"
              id="yuvaCoordinatorName"
              className="inputClass"
              value={yuvaCoordinatorName}
              onChange={(e) =>
                updateVerification("yuvaCoordinatorName", e.target.value)
              }
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="verificationDate">
              Verification Date
            </label>
            <input
              type="date"
              id="verificationDate"
              className="inputClass"
              value={verificationDate}
              onChange={(e) =>
                updateVerification("verificationDate", e.target.value)
              }
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

export default VerificationForm;
