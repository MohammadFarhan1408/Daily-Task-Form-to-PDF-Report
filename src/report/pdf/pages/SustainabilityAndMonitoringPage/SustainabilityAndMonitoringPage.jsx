import React from "react";
import { Page, View } from "@react-pdf/renderer";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import SustainabilitySection from "./SustainabilitySection";
import MonitoringSection from "./MonitoringSection";
import { styles as sustainabilityStyles } from "./sustainabilityStyles";

export const SustainabilityAndMonitoringPage = () => {
  return (
    <Page size="A4" style={sustainabilityStyles.page}>
      <PDFHeader title="Sustainability & Scalability" />
      <SustainabilitySection />

      <View style={{ marginTop: 20 }} />

      <PDFHeader title="Monitoring & Evaluation Methodology" />
      <MonitoringSection />

      <PDFFooter />
    </Page>
  );
};
