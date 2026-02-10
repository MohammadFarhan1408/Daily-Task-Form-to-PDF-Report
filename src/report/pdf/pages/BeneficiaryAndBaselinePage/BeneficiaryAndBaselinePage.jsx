import React from "react";
import { Page, View } from "@react-pdf/renderer";
import { useReportStore } from "@/store/reportStore";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

import { styles as beneficiaryStyles } from "./beneficiaryStyles";
import BeneficiarySection from "./BeneficiarySection";
import BaselineEndlineSection from "./BaselineEndlineSection";

export const BeneficiaryAndBaselinePage = () => {
  return (
    <Page size="A4" style={beneficiaryStyles.page}>
      <View id="beneficiary">
        <PDFHeader title="Beneficiary Profile" />
        <BeneficiarySection />
      </View>

      <View id="baseline">
        <PDFHeader title="Baseline vs Endline" />
        <BaselineEndlineSection />
      </View>

      <PDFFooter />
    </Page>
  );
};
