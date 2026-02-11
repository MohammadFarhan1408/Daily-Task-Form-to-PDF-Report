import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    minHeight: 28,
    alignItems: "center",
  },

  tableHeader: {
    backgroundColor: "#f3f4f6",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    fontWeight: "bold",
  },

  cell: {
    padding: 6,
    fontSize: 10,
  },

  srCol: {
    width: "10%",
    textAlign: "center",
  },

  particularCol: {
    width: "35%",
  },

  descCol: {
    width: "40%",
  },

  amountCol: {
    width: "15%",
    textAlign: "right",
  },

  totalRow: {
    marginTop: 6,
    borderTopWidth: 2,
    borderColor: "#111827",
    backgroundColor: "#f9fafb",
  },

  totalLabel: {
    width: "80%",
    textAlign: "right",
    fontSize: 11,
    fontWeight: "bold",
    paddingRight: 8,
  },

  totalAmount: {
    fontSize: 11,
    fontWeight: "bold",
  },

  emptyText: {
    fontSize: 10,
    padding: 8,
    color: "#6b7280",
  },

  contactSection: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    fontSize: 10,
  },

  contactHeading: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: "bold",
  },

  contactLine: {
    marginBottom: 2,
  },
});
