import React from "react";
import { Page, View } from "@react-pdf/renderer";
import CaseStudiesSection from "./CaseStudiesSection";
import ChallengesSection from "./ChallengesSection";
import { styles as caseStudyStyles } from "./caseStudyStyles";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

export const CaseStudiesAndChallengesPage = () => {
  return (
    <Page size="A4" style={caseStudyStyles.page}>
      <PDFHeader title="Case Studies / Success Stories" />
      <CaseStudiesSection />

      <View style={{ marginTop: 20 }} />

      <PDFHeader title="Challenges & Learnings" />
      <ChallengesSection />

      <PDFFooter />
    </Page>
  );
};
