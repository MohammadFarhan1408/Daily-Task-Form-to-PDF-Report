import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  container: {
    marginTop: 10,
    flexDirection: "column",
    gap: 20,
  },
  techSection: {
    marginBottom: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    letterSpacing: 1,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f8fafc",
    border: "1pt solid #e2e8f0",
  },
  researchCard: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f0fdf4",
    border: "1pt dashed #10b981",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
  researchText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#065f46",
    fontFamily: "Helvetica-Oblique",
  },
});
