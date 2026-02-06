import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const LearningOutcomesPage = () => {
  const {
    technicalSkillsGained,
    softSkillsDeveloped,
    toolsPlatformsUsed,
    handsOnLearningHours,
  } = useReportStore((state) => state.learningOutcomes || {});

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Learning & Skill Outcomes" />

      {/* Hero Achievement Metric */}
      <View style={styles.heroMetric}>
        <Text style={styles.heroLabel}>TOTAL HANDS-ON LEARNING HOURS</Text>
        <Text style={styles.heroValue}>{handsOnLearningHours}h+</Text>
        <Text style={styles.heroSubtext}>
          Practical Experience in STEM & Innovation
        </Text>
      </View>

      <View style={styles.mainGrid}>
        {/* Technical vs Soft Skills */}
        <View style={styles.skillsRow}>
          <View style={[styles.skillCard, { borderLeft: "4pt solid #3b82f6" }]}>
            <Text style={styles.skillTitle}>TECHNICAL SKILLS GAINED</Text>
            <Text style={styles.skillBody}>
              {technicalSkillsGained ||
                "Specific technical competencies have been developed through interactive modules."}
            </Text>
          </View>

          <View style={[styles.skillCard, { borderLeft: "4pt solid #10b981" }]}>
            <Text style={[styles.skillTitle, { color: "#059669" }]}>
              SOFT SKILLS DEVELOPED
            </Text>
            <Text style={styles.skillBody}>
              {softSkillsDeveloped ||
                "Participants enhanced their communication, leadership, and collaboration skills."}
            </Text>
          </View>
        </View>

        {/* Tools and Platforms */}
        <View style={styles.toolsSection}>
          <Text style={styles.toolsHeader}>TOOLS & PLATFORMS UTILIZED</Text>
          <View style={styles.toolsContent}>
            <Text style={styles.toolsText}>
              {toolsPlatformsUsed ||
                "Various industry-standard tools and digital platforms were integrated into the training."}
            </Text>
          </View>
        </View>
      </View>

      <PDFFooter />
    </Page>
  );
};
