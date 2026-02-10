import React from "react";
import { Page, View } from "@react-pdf/renderer";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";
import { styles as objectiveStyle } from "./objectiveStyle";
import ObjectivesSection from "./ObjectivesSection";
import EconomicSection from "./EconomicSection";

const isEmptyText = (text) => !text || text.trim() === "";

const isEmptyNumber = (n) =>
  n === "" || n === null || n === undefined || Number.isNaN(n);

const isEconomicImpactEmpty = (e) => {
  return (
    isEmptyText(e.employabilityEnhancement) &&
    isEmptyText(e.incomeOpportunities) &&
    isEmptyNumber(e.costPerBeneficiary) &&
    isEmptyNumber(e.roi)
  );
};

export const ObjectiveAndEconomicImpactPage = ({ data }) => {
  const hideEconomic = isEconomicImpactEmpty(data.economicImpact);

  return (
    <Page size="A4" style={objectiveStyle.page}>
      <View id="objectives">
        <PDFHeader title="Objectives & Intended Outcomes" />
        <ObjectivesSection />
      </View>

      <View style={{ marginTop: 20 }} />

      {!hideEconomic && (
        <View id="economic-impact">
          <PDFHeader title="Economic Impact" />
          <EconomicSection />
        </View>
      )}

      <PDFFooter />
    </Page>
  );
};
