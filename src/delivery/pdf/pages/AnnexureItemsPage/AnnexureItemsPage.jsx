import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFPageLayout from "../../components/PDFPageLayout";
import { useDeliveryStore } from "@/store/deliveryStore";

export const AnnexureItemsPage = ({ itemChecklist, items }) => {
  const store = useDeliveryStore();
  const list = itemChecklist ?? items ?? store.itemChecklist ?? [];

  return (
    <PDFPageLayout>
      {/* Title */}
      <Text style={styles.title}>
        Annexure–I: Item Specification and Quantity Checklist
      </Text>

      <View style={styles.table}>
        {/* Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.colSr, styles.headerText]}>Sr</Text>
          <Text style={[styles.cell, styles.colName, styles.headerText]}>
            Description of Goods
          </Text>
          <Text style={[styles.cell, styles.colQty, styles.headerText]}>
            Qty
          </Text>
          <Text style={[styles.cell, styles.colCheck, styles.headerText]}>
            Received
          </Text>
        </View>

        {/* Body */}
        {list && list.length > 0 ? (
          list.map((item, index) => (
            <View
              key={item.id || index}
              style={[
                styles.row,
                styles.bodyRow,
                index % 2 === 0 ? styles.altRow : null,
              ]}
            >
              <Text style={[styles.cell, styles.colSr]}>{index + 1}</Text>
              <Text style={[styles.cell, styles.colName]}>
                {item.itemName || "—"}
              </Text>
              <Text style={[styles.cell, styles.colQty]}>
                {item.quantity ?? "—"}
              </Text>
              <Text style={[styles.cell, styles.colCheck]}>
                {item.received ? "Yes" : "No"}
              </Text>
            </View>
          ))
        ) : (
          <View style={styles.emptyRow}>
            <Text style={styles.emptyText}>
              No items found. Please upload Excel file.
            </Text>
          </View>
        )}
      </View>
    </PDFPageLayout>
  );
};
