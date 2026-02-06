import { StyleSheet } from "@react-pdf/renderer";

export const commonStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: "1 solid #e5e7eb",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  website: {
    fontSize: 10,
    color: "#2563eb",
    textTransform: "uppercase",
  },
  pageNum: {
    fontSize: 10,
    color: "#64748b",
  },
});
