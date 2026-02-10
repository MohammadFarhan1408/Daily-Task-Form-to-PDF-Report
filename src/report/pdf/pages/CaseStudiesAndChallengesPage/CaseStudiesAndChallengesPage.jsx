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
      <View id="case-studies">
        <PDFHeader title="Case Studies / Success Stories" />
        <CaseStudiesSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="challenges-learning">
        <PDFHeader title="Challenges & Learnings" />
        <ChallengesSection />
      </View>

      <PDFFooter />
    </Page>
  );
};
