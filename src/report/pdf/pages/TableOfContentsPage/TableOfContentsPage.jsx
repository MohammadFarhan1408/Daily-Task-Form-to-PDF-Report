import React from "react";
import { View, Text, Page } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

export const TableOfContentsPage = () => {
  const tocData = [
    { title: "1. Project Overview", page: "3" },
    { title: "2. Objectives & Intended Outcomes", page: "4" },
    { title: "3. Beneficiary Profile", page: "5" },
    { title: "4. Baseline vs Endline Comparison", page: "6" },
    { title: "5. Quantitative Impact", page: "7" },
    { title: "6. Qualitative Impact", page: "8" },
    { title: "7. Learning & Skill Outcomes", page: "9" },
    { title: "8. Institutional / Ecosystem Impact", page: "10" },
    { title: "9. Social Impact", page: "11" },
    { title: "10. Economic Impact (If Applicable)", page: "12" },
    { title: "11. Innovation & Technology Impact", page: "13" },
    { title: "12. Case Studies / Success Stories", page: "14" },
    { title: "13. Challenges & Learnings", page: "15" },
    { title: "14. Sustainability & Scalability", page: "16" },
    { title: "15. Monitoring & Evaluation Methodology", page: "17" },
    { title: "16. Conclusion & Way Forward", page: "18" },
    { title: "17. Photographs", page: "19" },
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
