import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFFooter from "../../components/PDFFooter";
import PDFHeader from "../../components/PDFHeader";

export const BaselineEndlinePage = () => {
  const baselineEndline = useReportStore(
    (state) => state.baselineEndline || [],
  );

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader title="Baseline vs Endline Comparison" />

      <View style={styles.introSection}>
        <Text style={styles.introText}>
          The following comparison highlights the measurable progress achieved
          during the project intervention, comparing initial baseline metrics
          against the final endline evaluations.
        </Text>
      </View>

      {/* Table Structure */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <View style={[styles.tableCol, { flex: 3 }]}>
            <Text style={styles.headerText}>PARAMETER</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>BASELINE</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>ENDLINE</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.headerText}>% CHANGE</Text>
          </View>
        </View>

        {/* Table Rows */}
        {baselineEndline.length > 0 ? (
          baselineEndline.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View
                style={[styles.tableCol, { flex: 3, alignItems: "flex-start" }]}
              >
                <Text style={styles.cellTextBold}>{item.parameter || "—"}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.cellText}>{item.baselineValue || 0}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.cellText}>{item.endlineValue || 0}</Text>
              </View>
              <View style={[styles.tableCol, styles.changeCol]}>
                <Text
                  style={[
                    styles.changeText,
                    { color: item.percentChange >= 0 ? "#16a34a" : "#dc2626" },
                  ]}
                >
                  {item.percentChange >= 0 ? "+" : ""}
                  {item.percentChange}%
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { flex: 6 }]}>
              <Text style={styles.cellText}>No comparison data available.</Text>
            </View>
          </View>
        )}
      </View>

      {/* Impact Summary Note */}
      <View style={styles.summaryNote}>
        <Text style={styles.summaryTitle}>Data Interpretation:</Text>
        <Text style={styles.summaryText}>
          A positive percentage change indicates improvement in proficiency,
          infrastructure utilization, or beneficiary engagement
          post-intervention.
        </Text>
      </View>

      <PDFFooter />
    </Page>
  );
};
