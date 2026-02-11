import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import SectionTitle from "../../components/SectionTitle";
import PDFPageLayout from "../../components/PDFPageLayout";
import { useProposalStore } from "@/store/proposalStore";

export const FinancialProposalPage = () => {
  const items = useProposalStore((state) => state.financialProposal || []);

  const totalAmount = items.reduce(
    (sum, item) => sum + (Number(item.amount) || 0),
    0,
  );

  return (
    <PDFPageLayout>
      <View id="financial-proposal">
        <SectionTitle title="Financial Proposal" />

        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.cell, styles.srCol]}>Sr. No.</Text>
          <Text style={[styles.cell, styles.particularCol]}>Particular</Text>
          <Text style={[styles.cell, styles.descCol]}>Description</Text>
          <Text style={[styles.cell, styles.amountCol]}>Amount</Text>
        </View>

        {/* Table Rows */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.cell, styles.srCol]}>{index + 1}</Text>
              <Text style={[styles.cell, styles.particularCol]}>
                {item.particular || "-"}
              </Text>
              <Text style={[styles.cell, styles.descCol]}>
                {item.description || "-"}
              </Text>
              <Text style={[styles.cell, styles.amountCol]}>
                Rs. {item.amount?.toLocaleString() || "0"}
              </Text>
            </View>
          ))
        ) : (
          <View style={styles.tableRow}>
            <Text style={styles.emptyText}>No financial items added.</Text>
          </View>
        )}

        {/* Total Row */}
        <View style={[styles.tableRow, styles.totalRow]}>
          <Text style={[styles.cell, styles.totalLabel]} colSpan={3}>
            Total Amount
          </Text>
          <Text style={[styles.cell, styles.amountCol, styles.totalAmount]}>
            Rs. {totalAmount.toLocaleString()}
          </Text>
        </View>

        {/* Contact Person Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactHeading}>Contact Person Details</Text>
          <Text style={styles.contactLine}>Isha Bhagat</Text>
          <Text style={styles.contactLine}>
            Designation: Chief Operational Officer (COO)
          </Text>
          <Text style={styles.contactLine}>Contact No.: 9726519892</Text>
          <Text style={styles.contactLine}>Email ID: isha@stembotix.com</Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
