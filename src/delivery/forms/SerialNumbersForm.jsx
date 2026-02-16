import React from "react";
import { useDeliveryStore } from "@/store/deliveryStore";
import FormNavigation from "../navigation/FormNavigation";

const SerialNumbersForm = ({ nextStep, prevStep, isLastStep, generatePDF }) => {
  const printers = useDeliveryStore((state) => state.serialNumbers.printers);
  const laptops = useDeliveryStore((state) => state.serialNumbers.laptops);

  const updatePrinterSerial = useDeliveryStore(
    (state) => state.updatePrinterSerial,
  );
  const updateLaptopSerial = useDeliveryStore(
    (state) => state.updateLaptopSerial,
  );

  const addPrinter = useDeliveryStore((state) => state.addPrinter);
  const removePrinter = useDeliveryStore((state) => state.removePrinter);

  const addLaptop = useDeliveryStore((state) => state.addLaptop);
  const removeLaptop = useDeliveryStore((state) => state.removeLaptop);

  return (
    <div>
      <div className="header">
        <h3 className="title">Serial Numbers</h3>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="space-y-8">
          {/* Printers */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">3D Printers</h4>
            </div>

            <div className="md:col-span-2">
              {printers.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30"
                >
                  <input
                    type="text"
                    className="inputClass"
                    placeholder="Printer Serial Number"
                    value={item}
                    required
                    onChange={(e) => updatePrinterSerial(index, e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => removePrinter(index)}
                    className="text-red-500 text-xs mt-1"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addPrinter}
                className="text-blue-600 text-sm font-bold"
              >
                + Add Printer
              </button>
            </div>
          </div>

          {/* Laptops */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold">Laptops</h4>
            </div>

            <div className="md:col-span-2">
              {laptops.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 border-l-4 border-green-500 bg-green-50/30"
                >
                  <input
                    type="text"
                    className="inputClass"
                    placeholder="Laptop Serial Number"
                    value={item}
                    required
                    onChange={(e) => updateLaptopSerial(index, e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => removeLaptop(index)}
                    className="text-red-500 text-xs mt-1"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addLaptop}
                className="text-green-600 text-sm font-bold"
              >
                + Add Laptop
              </button>
            </div>
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

export default SerialNumbersForm;
