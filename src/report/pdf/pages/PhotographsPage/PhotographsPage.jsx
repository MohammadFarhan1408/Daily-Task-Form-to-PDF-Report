import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./styles";
import { useReportStore } from "@/store/reportStore";
import PDFHeader from "../../components/PDFHeader";
import PDFFooter from "../../components/PDFFooter";

export const PhotographsPage = () => {
  const photographs = useReportStore((state) => state.photographs);

  const images = photographs
    ? photographs.map((img) => URL.createObjectURL(img))
    : [];

  return (
    <Page size="A4" style={styles.page} id="photographs">
      <PDFHeader title={"Photographs"} />
      <View style={styles.photoGrid}>
        {images.slice(0, 8).map((img, i) => (
          <Image key={i} src={img} style={styles.photo} />
        ))}
      </View>

      <PDFFooter />
    </Page>
  );
};
