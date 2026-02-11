import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { useProposalStore } from "@/store/proposalStore";
import PDFPageLayout from "../../components/PDFPageLayout";
import { styles } from "./styles";
import SectionTitle from "../../components/SectionTitle";

export const ProjectProposalPage = () => {
  const { title, intro, objectives, provision } = useProposalStore(
    (state) => state.projectProposal,
  );

  return (
    <PDFPageLayout>
      <View id="project-proposal">
        <SectionTitle title={"Project Proposal"} />

        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>{title}</Text>
          <Text style={styles.introText}>{intro}</Text>
        </View>

        <Text style={styles.sectionHeading}>Key Objectives</Text>
        <View style={styles.objectiveGrid}>
          {objectives?.map((obj, i) => (
            <View key={i} style={styles.objectiveCard}>
              <Text style={styles.objTitle}>{obj.name}</Text>
              <Text style={styles.objDesc}>{obj.description}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionHeading}>What STEMbotix Provides</Text>
        {provision?.map((item, i) => (
          <View key={i} style={styles.serviceItem}>
            <Text style={styles.serviceHeader}>
              {i + 1}. {item.title}
            </Text>
            <Text style={styles.serviceBody}>{item.content}</Text>
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
