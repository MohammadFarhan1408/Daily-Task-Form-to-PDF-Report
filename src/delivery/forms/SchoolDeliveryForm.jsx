import React from "react";
import { useDeliveryStore } from "@/store/deliveryStore";
import FormNavigation from "../navigation/FormNavigation";

const SchoolDeliveryForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    schoolName,
    schoolAddress,
    deliveredAndInstalledBy,
    deliveredByContactNo,
    receivedBy,
    receivedByContactNo,
  } = useDeliveryStore((state) => state.schoolDelivery);

  const updateSchoolDelivery = useDeliveryStore(
    (state) => state.updateSchoolDelivery,
  );

  return (
    <div>
      <div className="">
        <div className="header">
          <h3 className="title">School Delivery Information</h3>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            nextStep();
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="labelClass" htmlFor="schoolName">
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                value={schoolName}
                onChange={(e) =>
                  updateSchoolDelivery("schoolName", e.target.value)
                }
                className="inputClass"
                placeholder="School Name"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="labelClass" htmlFor="schoolAddress">
                School Address
              </label>
              <input
                type="text"
                id="schoolAddress"
                value={schoolAddress}
                onChange={(e) =>
                  updateSchoolDelivery("schoolAddress", e.target.value)
                }
                className="inputClass"
                placeholder="School Address"
                required
              />
            </div>
            <div>
              <label className="labelClass" htmlFor="deliveredAndInstalledBy">
                Delivered & Installed By
              </label>
              <input
                type="text"
                id="deliveredAndInstalledBy"
                value={deliveredAndInstalledBy}
                onChange={(e) =>
                  updateSchoolDelivery(
                    "deliveredAndInstalledBy",
                    e.target.value,
                  )
                }
                className="inputClass"
                placeholder="Delivered & Installed By"
                required
              />
            </div>
            <div>
              <label className="labelClass" htmlFor="deliveredByContactNo">
                Delivered By Contact No
              </label>
              <input
                type="text"
                id="deliveredByContactNo"
                value={deliveredByContactNo}
                onChange={(e) =>
                  updateSchoolDelivery("deliveredByContactNo", e.target.value)
                }
                className="inputClass"
                placeholder="Delivered By Contact No"
                required
              />
            </div>
            <div>
              <label className="labelClass" htmlFor="receivedBy">
                Received By
              </label>
              <input
                type="text"
                id="receivedBy"
                value={receivedBy}
                onChange={(e) =>
                  updateSchoolDelivery("receivedBy", e.target.value)
                }
                className="inputClass"
                placeholder="Received By"
                required
              />
            </div>
            <div>
              <label className="labelClass" htmlFor="receivedByContactNo">
                Received By Contact No
              </label>
              <input
                type="text"
                id="receivedByContactNo"
                value={receivedByContactNo}
                onChange={(e) =>
                  updateSchoolDelivery("receivedByContactNo", e.target.value)
                }
                className="inputClass"
                placeholder="Received By Contact No"
                required
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
      </div>
    </div>
  );
};

export default SchoolDeliveryForm;
