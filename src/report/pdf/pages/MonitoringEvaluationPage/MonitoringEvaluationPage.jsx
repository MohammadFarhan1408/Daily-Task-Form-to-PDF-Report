import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const MonitoringEvaluationPage = () => {
  const { dataCollectionTools, assessmentMethods, monitoringFrequency } =
    useReportStore((state) => state.monitoringEvaluation || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Monitoring & Evaluation Methodology" />

      {/* <View style={styles.introContainer}>
        <Text style={styles.introText}>
          To ensure transparency and measurable progress, a structured
          Monitoring and Evaluation (M&E) framework was implemented throughout
          the project lifecycle.
        </Text>
      </View> */}

      <View style={styles.methodologyGrid}>
        {/* Data Collection Tools */}
        <View style={styles.methodCard}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.dot, { backgroundColor: "#3b82f6" }]} />
            <Text style={styles.cardTitle}>DATA COLLECTION TOOLS</Text>
          </View>
          <Text style={styles.cardBody}>
            {dataCollectionTools ||
              "Standardized surveys, digital logs, and observation checklists were utilized."}
          </Text>
        </View>

        {/* Assessment Methods */}
        <View style={styles.methodCard}>
          <View style={styles.cardHeaderRow}>
            <View style={[styles.dot, { backgroundColor: "#8b5cf6" }]} />
            <Text style={styles.cardTitle}>ASSESSMENT METHODS</Text>
          </View>
          <Text style={styles.cardBody}>
            {assessmentMethods ||
              "Impact was measured through baseline-endline comparisons and practical skill evaluations."}
          </Text>
        </View>
      </View>

      {/* Frequency Highlight */}
      <View style={styles.frequencyBox}>
        <Text style={styles.frequencyLabel}>MONITORING FREQUENCY</Text>
        <Text style={styles.frequencyValue}>
          {monitoringFrequency ||
            "Regular periodic assessments performed throughout the project duration."}
        </Text>
      </View>

      {/* <View style={styles.complianceNote}>
        <Text style={styles.complianceText}>
          * All data collection processes adhere to privacy standards and focus
          on tracking learning outcomes, attendance, and behavioral changes as
          per NEP 2020 guidelines.
        </Text>
      </View> */}

      <PDFFooter />
    </Page>
  );
};
