import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const QualitativeImpactPage = () => {
  const {
    confidenceImprovement,
    leadershipSkills,
    teamwork,
    criticalThinking,
  } = useReportStore((state) => state.qualitativeImpact || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Qualitative Impact & Behavioral Change" />

      <View style={styles.introBox}>
        <Text style={styles.introText}>
          Beyond numerical data, the project has fostered significant behavioral
          shifts and interpersonal growth among beneficiaries, aligning with
          holistic learning objectives.
        </Text>
      </View>

      <View style={styles.grid}>
        {/* Confidence & Leadership Row */}
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#f59e0b" }]} />
            <Text style={styles.cardLabel}>CONFIDENCE IMPROVEMENT</Text>
            <Text style={styles.cardBody}>
              {confidenceImprovement ||
                "Observed increase in student participation and willingness to present projects publicly."}
            </Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#3b82f6" }]} />
            <Text style={styles.cardLabel}>TEAMWORK & COLLABORATION</Text>
            <Text style={styles.cardBody}>
              {teamwork ||
                "Enhanced ability to work in groups during robotics competitions and lab activities."}
            </Text>
          </View>
        </View>

        {/* Thinking & Leadership Row */}
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#10b981" }]} />
            <Text style={styles.cardLabel}>CRITICAL THINKING</Text>
            <Text style={styles.cardBody}>
              {criticalThinking ||
                "Improved problem-solving skills through hands-on engagement with AR toys and AI kits."}
            </Text>
          </View>

          <View style={styles.card}>
            <View style={[styles.indicator, { backgroundColor: "#8b5cf6" }]} />
            <Text style={styles.cardLabel}>LEADERSHIP SKILLS</Text>
            <Text style={styles.cardBody}>
              {leadershipSkills ||
                "Students taking initiative in managing lab equipment and guiding peers during hackathons."}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.observationNote}>
        <Text style={styles.noteText}>
          * Assessment is based on qualitative observations by trained educators
          and post-intervention feedback sessions.
        </Text>
      </View>

      <PDFFooter />
    </Page>
  );
};
