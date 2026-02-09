import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import STEMbotixLogo from "@/assets/images/STEMbotix-Logo.png";

export const BackPage = () => {
  return (
    <Page size="A4" style={styles.backPage} id="back-page">
      {/* Decorative Top Element */}
      <View style={styles.topAccent} />

      <View style={styles.backContent}>
        <Text style={styles.thankYouText}>
          Thank you for your partnership in driving impact.
        </Text>
        <View style={styles.backDivider} />

        <Text style={styles.conclusionNote}>
          This report was generated to summarize the progress and outcomes of
          our joint initiatives. For further inquiries regarding the data or
          future collaborations, please reach out to us.
        </Text>
      </View>

      {/* Footer / Contact Section */}
      <View style={styles.backFooter}>
        <View style={styles.contactContainer}>
          <Text style={styles.contactHeading}>GET IN TOUCH</Text>
          <Text style={styles.contactLink}>www.stembotix.com</Text>
          <Text style={styles.contactLink}>info@stembotix.com</Text>
        </View>

        <View style={styles.backLogoContainer}>
          <Image src={STEMbotixLogo} style={styles.footerLogo} />
          <Text style={styles.copyright}>
            © {new Date().getFullYear()} STEMbotix. All rights reserved.
          </Text>
        </View>
      </View>
    </Page>
  );
};
