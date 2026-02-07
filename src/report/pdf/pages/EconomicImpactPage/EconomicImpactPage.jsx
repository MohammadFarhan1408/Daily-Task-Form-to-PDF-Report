import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const EconomicImpactPage = () => {
  const {
    employabilityEnhancement,
    incomeOpportunities,
    costPerBeneficiary,
    roi,
  } = useReportStore((state) => state.economicImpact || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Economic Impact" />

      {/* Financial Metrics Row */}
      <View style={styles.metricsRow}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>COST PER BENEFICIARY</Text>
          <Text style={styles.metricValue}>
            {Number(costPerBeneficiary).toLocaleString()}
          </Text>
        </View>
        <View
          style={[
            styles.metricCard,
            { backgroundColor: "#f0fdf4", borderColor: "#bcf0da" },
          ]}
        >
          <Text style={[styles.metricLabel, { color: "#166534" }]}>
            RETURN ON INVESTMENT (ROI)
          </Text>
          <Text style={[styles.metricValue, { color: "#15803d" }]}>{roi}%</Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        {/* Employability Enhancement */}
        <View style={styles.infoBlock}>
          <View style={styles.iconHeader}>
            <View style={styles.bullet} />
            <Text style={styles.blockTitle}>EMPLOYABILITY ENHANCEMENT</Text>
          </View>
          <View style={styles.textArea}>
            <Text style={styles.bodyText}>
              {employabilityEnhancement ||
                "No employability data recorded for this period."}
            </Text>
          </View>
        </View>

        {/* Income Opportunities */}
        <View style={[styles.infoBlock, { marginTop: 20 }]}>
          <View style={styles.iconHeader}>
            <View style={[styles.bullet, { backgroundColor: "#10b981" }]} />
            <Text style={styles.blockTitle}>
              INCOME GENERATION OPPORTUNITIES
            </Text>
          </View>
          <View style={styles.textArea}>
            <Text style={styles.bodyText}>
              {incomeOpportunities ||
                "No specific income opportunities documented."}
            </Text>
          </View>
        </View>
      </View>

      {/* Sustainability Disclaimer */}
      {/* <View style={styles.footerNote}>
        <Text style={styles.noteText}>
          * ROI and Cost calculations are based on project implementation
          expenses versus estimated market value of skills acquired by
          beneficiaries.
        </Text>
      </View> */}

      <PDFFooter />
    </Page>
  );
};
