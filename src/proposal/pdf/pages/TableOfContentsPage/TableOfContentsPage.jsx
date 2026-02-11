import React from "react";
import { View, Text, Page, Link } from "@react-pdf/renderer";
import { styles } from "./styles";
import PDFPageLayout from "../../components/PDFPageLayout";
import SectionTitle from "../../components/SectionTitle";

export const TableOfContentsPage = () => {
  const pageBlocks = [
    { items: [{ title: "Proposal", target: "proposal" }] },
    { items: [{ title: "About STEMbotix", target: "about-stembotix" }] },
    { items: [{ title: "Project Proposal", target: "project-proposal" }] },
    { items: [{ title: "Financial Proposal", target: "financial-proposal" }] },
    { items: [{ title: "Gallery", target: "gallery" }] },
  ];

  const START_PAGE = 3;
  let INDEX_NUM = 1;

  return (
    <PDFPageLayout>
      <View style={styles.tocContainer}>
        <SectionTitle title={"Table of Contents"} />
        {pageBlocks.map((block, blockIndex) => {
          const pageNumber = START_PAGE + blockIndex;

          const visibleItems = block.items.filter(
            (item) => !item.optional || item.show,
          );

          if (visibleItems.length === 0) return null;

          return visibleItems.map((item, itemIndex) => (
            <View key={`${blockIndex}-${itemIndex}`} style={styles.tocItem}>
              <Link src={`#${item.target}`} style={styles.tocText}>
                {`${INDEX_NUM++}. ${item.title}`}
              </Link>

              <View style={styles.dotLeader} />

              <Text style={styles.tocPage}>{pageNumber}</Text>
            </View>
          ));
        })}
      </View>
    </PDFPageLayout>
  );
};
