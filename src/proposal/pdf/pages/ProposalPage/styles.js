import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  dateText: {
    fontSize: 10,
    marginBottom: 15,
    textAlign: "right",
    color: "#475569",
  },
  recipientBlock: {
    marginBottom: 20,
  },
  toLabel: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  toValue: {
    fontSize: 11,
    color: "#1e293b",
  },
  subjectBox: {
    backgroundColor: "#f8fafc",
    padding: 10,
    borderLeft: "3px solid #1e40af",
    marginVertical: 15,
  },
  subjectText: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1e40af",
  },
  salutation: {
    fontSize: 11,
    marginBottom: 10,
    color: "#1e293b",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    textAlign: "justify",
    color: "#334155",
    marginBottom: 12,
  },
});
