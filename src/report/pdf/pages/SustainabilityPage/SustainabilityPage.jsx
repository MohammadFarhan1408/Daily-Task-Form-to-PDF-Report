import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const SustainabilityPage = () => {
  const { continuationPlan, scalabilityPotential, replicationPossibilities } =
    useReportStore((state) => state.sustainability || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Sustainability & Scalability" />

      <View style={styles.container}>
        {/* Post-Project Continuation Plan */}
        <View style={styles.sectionCard}>
          <View style={styles.headerRow}>
            <View
              style={[styles.statusIndicator, { backgroundColor: "#10b981" }]}
            />
            <Text style={styles.sectionLabel}>
              POST-PROJECT CONTINUATION PLAN
            </Text>
          </View>
          <Text style={styles.bodyText}>
            {continuationPlan ||
              "A detailed plan for institutionalizing the lab activities within the school's daily curriculum ensures long-term impact."}
          </Text>
        </View>

        {/* Scalability Potential */}
        <View style={styles.sectionCard}>
          <View style={styles.headerRow}>
            <View
              style={[styles.statusIndicator, { backgroundColor: "#3b82f6" }]}
            />
            <Text style={styles.sectionLabel}>SCALABILITY POTENTIAL</Text>
          </View>
          <Text style={styles.bodyText}>
            {scalabilityPotential ||
              "The modular nature of the AI and Robotics labs allows for expansion into additional grade levels and advanced modules."}
          </Text>
        </View>

        {/* Replication Possibilities */}
        <View style={styles.sectionCard}>
          <View style={styles.headerRow}>
            <View
              style={[styles.statusIndicator, { backgroundColor: "#8b5cf6" }]}
            />
            <Text style={styles.sectionLabel}>REPLICATION POSSIBILITIES</Text>
          </View>
          <View style={styles.replicationBox}>
            <Text style={styles.replicationText}>
              {replicationPossibilities ||
                "This phygital learning model can be replicated across other government and private schools to bridge the digital divide."}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.visionNote}>
        <Text style={styles.visionText}>
          Aligned with NEP 2020, these measures ensure that the technological
          infrastructure serves as a permanent catalyst for innovation in the
          local community.
        </Text>
      </View>

      <PDFFooter />
    </Page>
  );
};
