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
      <View id="social-impact">
        <PDFHeader title="Social Impact" />
        <SocialSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="innovation-impact">
        <PDFHeader title="Innovation & Technology Impact" />
        <InnovationSection />
      </View>

      <PDFFooter />
    </Page>
  );
};
