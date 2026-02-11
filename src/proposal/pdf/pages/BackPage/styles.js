import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  centerContent: {
    alignItems: "center",
    paddingHorizontal: 60,
  },

  thankYou: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 20,
  },

  message: {
    fontSize: 14,
    textAlign: "center",
    color: "#334155",
    lineHeight: 1.5,
  },

  footer: {
    alignItems: "center",
    paddingBottom: 40,
  },

  company: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#0f172a",
    letterSpacing: 1,
  },

  contactLine: {
    fontSize: 11,
    color: "#475569",
    marginBottom: 3,
  },
});
