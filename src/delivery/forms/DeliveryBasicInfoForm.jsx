import React from "react";
import { useDeliveryStore } from "@/store/deliveryStore";
import FormNavigation from "../navigation/FormNavigation";

const DeliveryBasicInfoForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const {
    date,
    // referenceNo,
    subject,
    purchaseOrderNo,
    purchaseOrderDate,
    projectName,
  } = useDeliveryStore((state) => state.deliveryBasicInfo);
  const updateDelivery = useDeliveryStore(
    (state) => state.updateDeliveryBasicInfo,
  );

  return (
    <div className="">
      <div className="header">
        <h3 className="title">Delivery Basic Info</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => updateDelivery("date", e.target.value)}
              className="inputClass"
              required
            />
          </div>
          {/* <div>
            <label className="labelClass" htmlFor="referenceNo">
              Reference No
            </label>
            <input
              type="number"
              id="referenceNo"
              value={referenceNo}
              onChange={(e) => updateDelivery("referenceNo", e.target.value)}
              maxLength={150}
              className="inputClass"
              placeholder="Reference No"
              required
            />
          </div> */}
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => updateDelivery("subject", e.target.value)}
              className="inputClass"
              placeholder="Describe Subject..."
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="purchaseOrderNo">
              Purchase Order No
            </label>
            <input
              type="number"
              id="purchaseOrderNo"
              value={purchaseOrderNo}
              onChange={(e) =>
                updateDelivery("purchaseOrderNo", e.target.value)
              }
              className="inputClass"
              placeholder="Purchase Order No"
              required
            />
          </div>
          <div>
            <label className="labelClass" htmlFor="purchaseOrderDate">
              Purchase Order Date
            </label>
            <input
              type="date"
              id="purchaseOrderDate"
              value={purchaseOrderDate}
              onChange={(e) =>
                updateDelivery("purchaseOrderDate", e.target.value)
              }
              className="inputClass"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="labelClass" htmlFor="projectName">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => updateDelivery("projectName", e.target.value)}
              maxLength={150}
              className="inputClass"
              placeholder="Project Name"
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
  );
};

export default DeliveryBasicInfoForm;
