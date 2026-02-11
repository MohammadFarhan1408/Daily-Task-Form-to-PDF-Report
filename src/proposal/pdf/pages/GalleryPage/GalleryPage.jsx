import React, { useEffect, useState } from "react";
import { View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "../../components/PDFPageLayout";
import SectionTitle from "../../components/SectionTitle";
import { styles } from "./styles";

const galleryModules = import.meta.glob(
  "/src/assets/images/Gallery/*.{jpg,jpeg,png}",
);

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );

export const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        Object.values(galleryModules).map((loader) => loader()),
      );
      setImages(loaded.map((m) => m.default));
    };

    loadImages();
  }, []);

  const pages = chunk(images, 8); // 6 images per page

  return pages.map((pageImages, pageIndex) => (
    <PDFPageLayout key={pageIndex}>
      <View>
        <SectionTitle title={`Gallery`} />

        <View style={styles.photoGrid}>
          {pageImages.map((img, i) => (
            <Image key={i} src={img} style={styles.photo} />
          ))}
        </View>
      </View>
    </PDFPageLayout>
  ));
};
