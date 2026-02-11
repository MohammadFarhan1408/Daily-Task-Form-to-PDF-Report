import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  introText: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#334155",
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  techBadge: {
    backgroundColor: "#eff6ff",
    borderLeft: "2px solid #2563eb",
    padding: "4px 8px",
    marginBottom: 4,
  },
  techText: {
    fontSize: 8,
    color: "#1e40af",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 10,
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 2,
  },
  statsGrid: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  statCard: {
    width: "30%",
    marginBottom: 8,
    padding: 6,
    backgroundColor: "#f8fafc",
    borderRadius: 4,
  },
  statValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563eb",
  },
  statLabel: {
    fontSize: 8,
    color: "#64748b",
    lineHeight: 1.2,
  },
  methodologyRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: "#2563eb",
  },
  signatureSection: {
    marginTop: 10,
    borderTop: "1px solid #e2e8f0",
    paddingTop: 10,
  },
});
