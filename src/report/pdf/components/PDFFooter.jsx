import { View, Text } from "@react-pdf/renderer";
import { commonStyles } from "../styles/commonStyles";

const PDFFooter = () => (
  <View style={commonStyles.footer} fixed>
    <Text style={commonStyles.website}>www.stembotix.com</Text>
    <Text
      style={commonStyles.pageNum}
      render={({ pageNumber, totalPages }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
    />
  </View>
);

export default PDFFooter;
