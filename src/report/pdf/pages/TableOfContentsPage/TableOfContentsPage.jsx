import React from "react";
import { View, Text, Page } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

export const TableOfContentsPage = () => {
  const tocData = [
    { title: "1. Summary", page: "3" },
    { title: "2. Project Overview", page: "3" },
    { title: "3. Objectives & Intended Outcomes", page: "4" },
    {
      title: "4. Beneficiary Profile And Baseline vs Endline Comparison",
      page: "5",
    },
    { title: "5. Quantitative And Qualitative Impact", page: "7" },
    {
      title:
        "6. Learning & Skill Outcomes And Institutional / Ecosystem Impact",
      page: "9",
    },
    { title: "7. Social And Innovation & Technology Impact", page: "11" },
    { title: "8. Economic Impact (If Applicable)", page: "12" },
    { title: "9. Case Studies And Challenges & Learnings", page: "14" },
    { title: "10. Sustainability & Monitoring", page: "16" },
    { title: "11. Photographs", page: "19" },
  ];

  return (
    <Page size="A4" style={styles.page} id="table-content">
      <PDFHeader title="Table of Contents" />

      <View style={styles.tocContainer}>
        {tocData.map((item, index) => (
          <View
            key={index}
            style={[styles.tocItem, item.indent && styles.tocIndent]}
          >
            <Text style={styles.tocText}>{item.title}</Text>
            <View style={styles.dotLeader} />
            <Text style={styles.tocPage}>{item.page}</Text>
          </View>
        ))}
      </View>

      <PDFFooter />
    </Page>
  );
};
