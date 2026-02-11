import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { useProposalStore } from "@/store/proposalStore";
import PDFPageLayout from "../../components/PDFPageLayout";
import { styles } from "./styles";

export const ProposalPage = () => {
  const { to, subject, description, date, salutation } = useProposalStore(
    (state) => state.proposal,
  );

  return (
    <PDFPageLayout>
      <View id="proposal">
        {/* Date Section */}
        <Text style={styles.dateText}>Date: {date}</Text>

        {/* Recipient Section */}
        <View style={styles.recipientBlock}>
          <Text style={styles.toLabel}>To,</Text>
          <Text style={styles.toValue}>{to}</Text>
        </View>

        {/* Subject Section */}
        <View style={styles.subjectBox}>
          <Text style={styles.subjectText}>Subject: {subject}</Text>
        </View>

        {/* Content Section */}
        <Text style={styles.salutation}>{salutation},</Text>

        {/* We split description by new lines to maintain paragraph spacing */}
        {description?.split("\n").map((paragraph, index) => (
          <Text key={index} style={styles.bodyText}>
            {paragraph}
          </Text>
        ))}
      </View>
    </PDFPageLayout>
  );
};
