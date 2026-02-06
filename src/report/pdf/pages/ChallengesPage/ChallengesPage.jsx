import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const ChallengesPage = () => {
  const { keyChallenges, mitigationStrategies, lessonsLearned } =
    useReportStore((state) => state.challengesAndLearnings || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Challenges & Learnings" />

      <View style={styles.contentContainer}>
        {/* Key Challenges Section */}
        <View style={styles.sectionBox}>
          <View style={[styles.accentBar, { backgroundColor: "#ef4444" }]} />
          <Text style={styles.sectionLabel}>KEY CHALLENGES</Text>
          <Text style={styles.contentText}>
            {keyChallenges || "No specific challenges recorded."}
          </Text>
        </View>

        {/* Mitigation Strategies Section */}
        <View style={styles.sectionBox}>
          <View style={[styles.accentBar, { backgroundColor: "#3b82f6" }]} />
          <Text style={styles.sectionLabel}>MITIGATION STRATEGIES</Text>
          <Text style={styles.contentText}>
            {mitigationStrategies || "No mitigation strategies recorded."}
          </Text>
        </View>

        {/* Lessons Learned Section */}
        <View style={styles.lessonsContainer}>
          <Text style={styles.lessonsLabel}>
            LESSONS LEARNED & FUTURE INSIGHTS
          </Text>
          <View style={styles.lessonsContent}>
            <Text style={styles.lessonsText}>
              {lessonsLearned ||
                "No lessons learned documented for this phase."}
            </Text>
          </View>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
