import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFPageLayout from "../../components/PDFPageLayout";
import { useDeliveryStore } from "@/store/deliveryStore";
import { formattedDate } from "@/utils/formatDate";

export const VerificationPage = () => {
  const {
    schoolAuthorityName,
    schoolAuthorityDesignation,
    stembotixRepresentativeName,
    yuvaCoordinatorName,
    verificationDate,
  } = useDeliveryStore((state) => state.verification);

  const formattedVerificationDate = formattedDate(
    verificationDate ? new Date(verificationDate) : null,
  );

  return (
    <PDFPageLayout>
      <Text style={styles.title}>Verification & Authorization</Text>

      <View style={styles.declarationBox}>
        <Text style={styles.declarationText}>
          The undersigned hereby confirms that the{" "}
          <Text style={styles.bold}>
            items listed in Annexure–I have been physically verified
          </Text>
          , found in accordance with the approved specifications and quantities,
          and are <Text style={styles.bold}>acceptable to the school</Text>.
          Installation has been inspected and no discrepancies were observed at
          the time of verification.
        </Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.colRole, styles.headerText]}>
            Role
          </Text>
          <Text style={[styles.cell, styles.colName, styles.headerText]}>
            Name & Designation
          </Text>
          <Text style={[styles.cell, styles.colSign, styles.headerText]}>
            Signature
          </Text>
        </View>

        <View style={[styles.row, styles.altRow]}>
          <Text style={[styles.cell, styles.colRole]}>
            School Authority (Verified By)
          </Text>
          <Text style={[styles.cell, styles.colName]}>
            {schoolAuthorityName}
            {schoolAuthorityDesignation
              ? `, ${schoolAuthorityDesignation}`
              : ""}
          </Text>
          <Text style={[styles.cell, styles.colSign]} />
        </View>

        <View style={styles.row}>
          <Text style={[styles.cell, styles.colRole]}>
            STEMbotix Representative (Delivered By)
          </Text>
          <Text style={[styles.cell, styles.colName]}>
            {stembotixRepresentativeName}
          </Text>
          <Text style={[styles.cell, styles.colSign]} />
        </View>

        <View style={[styles.row, styles.altRow]}>
          <Text style={[styles.cell, styles.colRole]}>
            Yuva Unstoppable Coordinator
          </Text>
          <Text style={[styles.cell, styles.colName]}>
            {yuvaCoordinatorName}
          </Text>
          <Text style={[styles.cell, styles.colSign]} />
        </View>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.dateText}>
          Date: {formattedVerificationDate || "—"}
        </Text>
        <Text style={styles.stampText}>School Seal & Signature</Text>
      </View>
    </PDFPageLayout>
  );
};
