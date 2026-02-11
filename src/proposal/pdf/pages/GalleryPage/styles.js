import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 20,
    borderBottom: "2 solid #3b82f6",
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },

  photoGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  photo: {
    width: "48%",
    height: 140,
    objectFit: "contain",
    marginBottom: 7,
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
