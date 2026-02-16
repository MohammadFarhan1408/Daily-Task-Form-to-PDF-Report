import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFPageLayout from "../../components/PDFPageLayout";
import { useDeliveryStore } from "@/store/deliveryStore";
import { formattedDate } from "@/utils/formatDate";

export const CertificateCoverPage = () => {
  const { deliveryBasicInfo, schoolDelivery } = useDeliveryStore();

  const {
    date,
    referenceNo,
    subject,
    projectName,
    purchaseOrderNo,
    purchaseOrderDate,
  } = deliveryBasicInfo || {};

  const {
    schoolName,
    schoolAddress,
    deliveredAndInstalledBy,
    deliveredByContactNo,
    receivedBy,
    receivedByContactNo,
  } = schoolDelivery || {};

  const currentDate = formattedDate(new Date());
  const formattedPurchaseOrderDate = formattedDate(
    purchaseOrderDate ? new Date(purchaseOrderDate) : null,
  );

  return (
    <PDFPageLayout>
      {/* Header Line */}
      <View style={styles.topRow}>
        <Text style={styles.dateText}>Date: {currentDate || "—"}</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>DELIVERY & INSTALLATION CERTIFICATE</Text>

      <Text style={styles.salutation}>TO WHOMSOEVER IT MAY CONCERN</Text>

      {/* Subject */}
      <View style={styles.subjectBox}>
        <Text style={styles.subjectLabel}>Subject:</Text>
        <Text style={styles.subjectText}>{subject}</Text>
      </View>

      {/* References */}
      <View style={styles.subjectBox}>
        <Text style={styles.subjectLabel}>References:</Text>
        <Text style={styles.subjectText}>
          Purchase Order
          <Text style={styles.bold}> PO-{purchaseOrderNo || "—"} </Text>
          on Dated{" "}
          <Text style={styles.bold}> {formattedPurchaseOrderDate || "—"} </Text>
        </Text>
      </View>

      {/* Body */}
      <View style={styles.contentBody}>
        <Text style={styles.paragraph}>
          This is to certify that
          <Text style={styles.bold}> STEMbotix Private Limited </Text>
          has successfully delivered and installed the STEM Lab items at the
          school premises as per the specifications and quantities mentioned in
          the work order issued by the Yuva Unstoppable and Annexure-I.
        </Text>

        <Text style={styles.paragraph}>
          The detailed item list and quantities are provided in Annexure-I.
        </Text>
      </View>

      {/* Delivery Details Table */}
      <Text style={styles.sectionTitle}>Delivery Details</Text>

      <View style={styles.table}>
        {/* School Name */}
        <View style={styles.tableRow}>
          <View style={styles.labelCol}>
            <Text style={styles.tableLabel}>School Name</Text>
          </View>
          <View style={styles.valueCol}>
            <Text style={styles.tableValue}>{schoolName || "—"}</Text>
          </View>
        </View>

        {/* Address */}
        <View style={styles.tableRow}>
          <View style={styles.labelCol}>
            <Text style={styles.tableLabel}>Address</Text>
          </View>
          <View style={styles.valueCol}>
            <Text style={styles.tableValue}>{schoolAddress || "—"}</Text>
          </View>
        </View>

        {/* Delivered By */}
        <View style={styles.tableRow}>
          <View style={styles.labelCol}>
            <Text style={styles.tableLabel}>Delivered & Installed By</Text>
          </View>
          <View style={styles.halfCol}>
            <Text style={styles.tableValue}>
              {deliveredAndInstalledBy || "—"}
            </Text>
          </View>
          <View style={styles.smallLabelCol}>
            <Text style={styles.tableLabel}>Contact</Text>
          </View>
          <View style={styles.smallValueCol}>
            <Text style={styles.tableValue}>{deliveredByContactNo || "—"}</Text>
          </View>
        </View>

        {/* Received By */}
        <View style={styles.tableRow}>
          <View style={styles.labelCol}>
            <Text style={styles.tableLabel}>Received By</Text>
          </View>
          <View style={styles.halfCol}>
            <Text style={styles.tableValue}>{receivedBy || "—"}</Text>
          </View>
          <View style={styles.smallLabelCol}>
            <Text style={styles.tableLabel}>Contact</Text>
          </View>
          <View style={styles.smallValueCol}>
            <Text style={styles.tableValue}>{receivedByContactNo || "—"}</Text>
          </View>
        </View>
      </View>

      {/* Declaration */}
      <View style={styles.declarationSection}>
        <Text style={styles.declarationTitle}>Declaration</Text>
        <Text style={styles.declarationText}>
          We hereby declare that all the items supplied by STEMbotix Private
          Limited have been received in full, installed correctly, and are in
          good working condition, as per the specifications and quantities
          mentioned in the work order and Annexure–I. The installation has been
          physically verified and found satisfactory.
        </Text>
      </View>

      {/* Signatures */}
      <View style={styles.signatureSection}>
        <View style={styles.sigBox}>
          <View style={styles.sigLine} />
          <Text style={styles.sigLabel}>Delivery Person Sign</Text>
        </View>

        <View style={styles.sigBox}>
          <View style={styles.sigLine} />
          <Text style={styles.sigLabel}>Sign and Stamp of School</Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
