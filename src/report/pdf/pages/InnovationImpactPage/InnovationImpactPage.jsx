import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const InnovationImpactPage = () => {
  const innovationImpact = useReportStore(
    (state) => state.innovationImpact || {},
  );

  const {
    newTechnologies = "",
    innovationProjects = "",
    research = "",
  } = innovationImpact;

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Innovation & Technology Impact" />

      <View style={styles.container}>
        {/* New Technologies Adopted */}
        <View style={styles.techSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>T</Text>
            </View>
            <Text style={styles.sectionTitle}>NEW TECHNOLOGIES ADOPTED</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bodyText}>
              {newTechnologies || "No new technology adoption data recorded."}
            </Text>
          </View>
        </View>

        {/* Innovation Projects Developed */}
        <View style={styles.techSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconCircle, { backgroundColor: "#8b5cf6" }]}>
              <Text style={styles.iconText}>P</Text>
            </View>
            <Text style={styles.sectionTitle}>
              INNOVATION PROJECTS DEVELOPED
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.bodyText}>
              {innovationProjects ||
                "No specific innovation projects documented."}
            </Text>
          </View>
        </View>

        {/* Research / IP Outcomes */}
        <View style={styles.techSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.iconCircle, { backgroundColor: "#10b981" }]}>
              <Text style={styles.iconText}>R</Text>
            </View>
            <Text style={styles.sectionTitle}>RESEARCH & IP OUTCOMES</Text>
          </View>
          <View style={styles.researchCard}>
            <Text style={styles.researchText}>
              {research ||
                "No research or intellectual property outcomes recorded for this phase."}
            </Text>
          </View>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
