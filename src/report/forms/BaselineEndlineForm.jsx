import React, { useMemo, useEffect } from "react";
import { useReportStore } from "@/store/reportStore";
import FormNavigation from "../navigation/FormNavigation";

const BaselineEndlineForm = ({
  nextStep,
  prevStep,
  isLastStep,
  generatePDF,
}) => {
  const baselineEndline = useReportStore((state) => state.baselineEndline);
  const updateBaselineEndline = useReportStore(
    (state) => state.updateBaselineEndline,
  );

  const row = baselineEndline?.[0] || {
    parameter: "",
    baselineValue: 0,
    endlineValue: 0,
    percentChange: 0,
  };

  const { parameter, baselineValue, endlineValue, percentChange } = row;

  // Calculate %
  const calculatedPercent = useMemo(() => {
    const base = parseFloat(baselineValue) || 0;
    const end = parseFloat(endlineValue) || 0;
    if (base === 0) return 0;
    return Number((((end - base) / base) * 100).toFixed(2));
  }, [baselineValue, endlineValue]);

  // Only update if different
  useEffect(() => {
    if (calculatedPercent !== percentChange) {
      updateBaselineEndline("percentChange", calculatedPercent);
    }
  }, [calculatedPercent, percentChange]); // DO NOT include update fn

  return (
    <>
      <div className="header">
        <h3 className="title">Baseline & Endline</h3>
      </div>

      <form
        className="py-4 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          nextStep();
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">Parameter</th>
                <th className="p-3">Baseline Value</th>
                <th className="p-3">Endline Value</th>
                <th className="p-3">% Change</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 ">
                  <input
                    type="text"
                    value={parameter || ""}
                    onChange={(e) =>
                      updateBaselineEndline("parameter", e.target.value)
                    }
                    required
                    maxLength={45}
                    className="inputClass "
                  />
                </td>

                <td className="p-3">
                  <input
                    type="number"
                    value={baselineValue}
                    onChange={(e) =>
                      updateBaselineEndline(
                        "baselineValue",
                        Number(e.target.value) || 0,
                      )
                    }
                    required
                    className="inputClass"
                  />
                </td>

                <td className="p-3">
                  <input
                    type="number"
                    value={endlineValue}
                    onChange={(e) =>
                      updateBaselineEndline(
                        "endlineValue",
                        Number(e.target.value) || 0,
                      )
                    }
                    required
                    className="inputClass"
                  />
                </td>

                <td className="p-3">
                  <input
                    type="number"
                    value={calculatedPercent}
                    disabled
                    required
                    className="inputClass bg-gray-100"
                  />
                </td>
              </tr>
            </tbody>
          </table>
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

export default BaselineEndlineForm;
