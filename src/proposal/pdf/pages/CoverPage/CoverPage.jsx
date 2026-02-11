import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { useProposalStore } from "@/store/proposalStore";
import PDFPageLayout from "../../components/PDFPageLayout";
import { styles } from "./styles";

export const CoverPage = () => {
  const { to, subject, date, description } = useProposalStore(
    (state) => state.proposal,
  );

  return (
    <PDFPageLayout>
      <View style={styles.container}>
        {/* TOP BRAND BLOCK */}
        <View style={styles.topDecoration}>
          <Text style={styles.companyName}>STEMbotix</Text>
          <Text style={styles.mainTitle}>Project Proposal</Text>
          <Text style={styles.subTitle}>
            Empowering the Next Generation of Innovators
          </Text>
        </View>

        {/* DETAILS */}
        <View style={styles.detailsSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Prepared For</Text>
            <Text style={styles.value}>{to || "Valued Institution"}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Subject</Text>
            <Text style={styles.value}>
              {subject || "STEM Lab Setup & Implementation"}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{date || "-"}</Text>
          </View>

          {/* OPTIONAL SHORT DESCRIPTION */}
          {description ? (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Overview</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          ) : null}
        </View>

        {/* FOOTER AUTHORITY */}
        {/* <View style={styles.footer}>
          <View>
            <Text style={styles.ceoName}>Isha Bhagat</Text>
            <Text style={styles.ceoTitle}>Chief Operational Officer (COO)</Text>
            <Text style={styles.ceoTitle}>STEMbotix</Text>
          </View>

          <View>
            <Text style={styles.ceoTitle}>Contact</Text>
            <Text style={styles.ceoTitle}>+91 9726519892</Text>
            <Text style={styles.ceoTitle}>isha@stembotix.com</Text>
          </View>
        </View> */}
      </View>
    </PDFPageLayout>
  );
};
