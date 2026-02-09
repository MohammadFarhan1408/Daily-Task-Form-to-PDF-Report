import React from "react";
import { View, Text, Page } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

export const TableOfContentsPage = () => {
  const tocData = [
    { title: "1. Summary", page: "3" },
    { title: "2. Project Overview", page: "4" },
    { title: "3. Objectives & Intended Outcomes", page: "5" },
    { title: "4. Beneficiary Profile", page: "6" },
    { title: "5. Baseline vs Endline Comparison", page: "6" },
    { title: "6. Qualitative Impact", page: "7" },
    { title: "7. Quantitative Impact", page: "7" },
    { title: "8. Learning & Skill Outcomes", page: "8" },
    { title: "9. Institutional / Ecosystem Impact", page: "8" },
    { title: "10. Social Impact", page: "9" },
    { title: "11. Innovation & Technology Impact", page: "9" },
    { title: "12. Economic Impact", page: "10" },
    { title: "13. Case Studies / Success Stories", page: "11" },
    { title: "14. Challenges & Learnings", page: "11" },
    { title: "15. Sustainability & Scalability", page: "12" },
    { title: "16. Monitoring & Evaluation Methodology", page: "12" },
    { title: "17. Photographs", page: "13" },
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
