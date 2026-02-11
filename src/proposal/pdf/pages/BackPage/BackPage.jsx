import React from "react";
import { Text, View } from "@react-pdf/renderer";
import PDFPageLayout from "../../components/PDFPageLayout";
import { styles } from "./styles";

export const BackPage = () => {
  return (
    <PDFPageLayout>
      <View style={styles.container}>
        {/* CENTER CONTENT */}
        <View style={styles.centerContent}>
          <Text style={styles.thankYou}>Thank You</Text>

          <Text style={styles.message}>
            We appreciate the opportunity to present this proposal.
            {"\n"}
            We look forward to collaborating and building an innovative future
            together.
          </Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
