import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const InstitutionalImpactPage = () => {
  const {
    teacherCapacityBuilding,
    infrastructureUse,
    curriculumEnhancement,
    sustainabilityMeasures,
  } = useReportStore((state) => state.institutionalImpact || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Institutional / Ecosystem Impact" />

      <View style={styles.container}>
        {/* Teacher Capacity Building */}
        <View style={styles.impactCard}>
          <Text style={styles.cardHeader}>
            CAPACITY BUILDING OF TEACHERS/STAFF
          </Text>
          <Text style={styles.cardBody}>
            {teacherCapacityBuilding ||
              "No specific data on staff training recorded."}
          </Text>
        </View>

        {/* Infrastructure Utilization */}
        <View style={styles.impactCard}>
          <Text style={styles.cardHeader}>INFRASTRUCTURE UTILIZATION</Text>
          <Text style={styles.cardBody}>
            {infrastructureUse || "No infrastructure usage data documented."}
          </Text>
        </View>

        {/* Curriculum Enhancement */}
        <View style={styles.impactCard}>
          <Text style={styles.cardHeader}>CURRICULUM ENHANCEMENT</Text>
          <Text style={styles.cardBody}>
            {curriculumEnhancement ||
              "No curriculum updates recorded for this phase."}
          </Text>
        </View>

        {/* Sustainability Measures */}
        <View style={[styles.impactCard, styles.sustainabilityHighlight]}>
          <View style={styles.row}>
            <View style={styles.leafIcon} />
            <Text
              style={[styles.cardHeader, { marginBottom: 0, color: "#166534" }]}
            >
              SUSTAINABILITY MEASURES
            </Text>
          </View>
          <View style={styles.separator} />
          <Text style={[styles.cardBody, { color: "#14532d" }]}>
            {sustainabilityMeasures ||
              "No long-term sustainability plans documented."}
          </Text>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
