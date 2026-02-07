import React from "react";
import { Page } from "@react-pdf/renderer";
import { useReportStore } from "@/store/reportStore";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

import { styles as beneficiaryStyles } from "./beneficiaryStyles";
import BeneficiarySection from "./BeneficiarySection";
import BaselineEndlineSection from "./BaselineEndlineSection";

export const BeneficiaryAndBaselinePage = () => {
  const baselineEndline = useReportStore(
    (state) => state.baselineEndline || [],
  );

  return (
    <Page size="A4" style={beneficiaryStyles.page}>
      <PDFHeader title="Beneficiary Profile" />

      <BeneficiarySection />

      <PDFHeader title="Baseline vs Endline" />

      <BaselineEndlineSection data={baselineEndline} />

      <PDFFooter />
    </Page>
  );
};
