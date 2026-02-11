import React, { useState } from "react";
import ProposalStepper from "./proposal/navigation/Stepper";
import ReportStepper from "./report/navigation/Stepper";

const App = () => {
  const [mode, setMode] = useState(null); // "proposal" | "report" | null

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              STEMbotix <span className="text-blue-600">DocGen</span>
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Professional Document Automation System
            </p>
          </div>

          {mode && (
            <button
              onClick={() => setMode(null)}
              className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-red-500 flex items-center transition-colors"
            >
              ← Switch Document Type
            </button>
          )}
        </div>

        {/* MODE SELECT UI */}
        {!mode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* PROPOSAL OPTION */}
            <div
              onClick={() => setMode("proposal")}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-200">
                  <div className="w-6 h-1 bg-white rounded-full mb-1" />
                  <div className="w-4 h-1 bg-white/60 rounded-full" />
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Project Proposal
                </h2>
                {/* <p className="text-slate-500 leading-relaxed">
                  Draft comprehensive cover letters, technical details, and
                  financial estimates for new STEM Lab installations.
                </p> */}

                <div className="mt-8 flex items-center text-blue-600 font-bold text-sm">
                  Start Building{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>

            {/* REPORT OPTION */}
            <div
              onClick={() => setMode("report")}
              className="group cursor-pointer bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <div className="w-5 h-5 border-2 border-white rounded-sm flex items-end p-0.5">
                    <div className="w-1 h-2 bg-white" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                  Impact Report
                </h2>
                {/* <p className="text-slate-500 leading-relaxed">
                  Generate post-implementation summaries, assessment results,
                  and impact analysis for completed projects.
                </p> */}

                <div className="mt-8 flex items-center text-emerald-600 font-bold text-sm">
                  Generate Report{" "}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-700">
            {mode === "proposal" && <ProposalStepper />}
            {mode === "report" && <ReportStepper />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
