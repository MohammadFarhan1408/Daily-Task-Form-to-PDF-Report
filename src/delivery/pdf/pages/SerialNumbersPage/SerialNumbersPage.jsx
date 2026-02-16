import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFPageLayout from "../../components/PDFPageLayout";
import { useDeliveryStore } from "@/store/deliveryStore";
import { formattedDate } from "@/utils/formatDate";

export const SerialNumbersPage = () => {
  const { serialNumbers, verification } = useDeliveryStore();

  const printers =
    serialNumbers?.printers?.filter((sn) => sn && sn.trim() !== "") || [];

  const laptops =
    serialNumbers?.laptops?.filter((sn) => sn && sn.trim() !== "") || [];

  const verificationDate = verification?.verificationDate;
  const formattedVerificationDate = verification?.verificationDate
    ? formattedDate(new Date(verification?.verificationDate))
    : null;

  const renderRows = (data) => {
    if (!data.length) {
      return (
        <View style={styles.row}>
          <Text style={styles.emptyText}>No serial numbers provided</Text>
        </View>
      );
    }

    return data.map((sn, index) => (
      <View key={index} style={styles.row}>
        <Text style={[styles.cell, styles.colSr]}>{index + 1}</Text>
        <Text style={[styles.cell, styles.colSerial]}>{sn}</Text>
      </View>
    ));
  };

  return (
    <PDFPageLayout>
      {/* Title */}
      <Text style={styles.title}>
        Annexure–II: Hardware Identification & Serial Number Log
      </Text>

      {/* 3D Printers */}
      <Text style={styles.sectionTitle}>1. 3D Printers</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.colSr, styles.headerText]}>
            Sr. No.
          </Text>
          <Text style={[styles.cell, styles.colSerial, styles.headerText]}>
            Serial Number of 3D Printer
          </Text>
        </View>
        {renderRows(printers)}
      </View>

      {/* Laptops */}
      <Text style={styles.sectionTitle}>2. Laptops</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.colSr, styles.headerText]}>
            Sr. No.
          </Text>
          <Text style={[styles.cell, styles.colSerial, styles.headerText]}>
            Serial Number of Laptops
          </Text>
        </View>
        {renderRows(laptops)}
      </View>

      {/* Footer */}
      <View style={styles.footerRow}>
        <Text style={styles.dateText}>
          Date: {formattedVerificationDate || "—"}
        </Text>
        <Text style={styles.stampText}>Sign and Stamp of School</Text>
      </View>
    </PDFPageLayout>
  );
};
