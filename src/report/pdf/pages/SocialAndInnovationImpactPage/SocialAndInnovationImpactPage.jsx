import React from "react";
import { Page, View } from "@react-pdf/renderer";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import SocialSection from "./SocialSection";
import InnovationSection from "./InnovationSection";
import { styles as socialStyles } from "./socialStyles";

export const SocialAndInnovationImpactPage = () => {
  return (
    <Page size="A4" style={socialStyles.page}>
      <PDFHeader title="Social Impact" />
      <SocialSection />

      <View style={{ marginTop: 20 }} />

      <PDFHeader title="Innovation & Technology Impact" />
      <InnovationSection />

      <PDFFooter />
    </Page>
  );
};
