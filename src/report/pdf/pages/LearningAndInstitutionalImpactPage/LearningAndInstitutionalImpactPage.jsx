import React from "react";
import { Page, View } from "@react-pdf/renderer";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import LearningSection from "./LearningSection";
import InstitutionalSection from "./InstitutionalSection";
import { styles as learningStyles } from "./learningStyles";

export const LearningAndInstitutionalImpactPage = () => {
  return (
    <Page size="A4" style={learningStyles.page}>
      <PDFHeader title="Learning & Skill Outcomes" />
      <LearningSection />

      <View style={{ marginTop: 20 }} />

      <PDFHeader title="Institutional / Ecosystem Impact" />
      <InstitutionalSection />

      <PDFFooter />
    </Page>
  );
};
