import { View, Text } from "@react-pdf/renderer";
import { commonStyles } from "../styles/commonStyles";

const PDFHeader = ({ title }) => (
  <View style={commonStyles.header}>
    <Text style={commonStyles.title}>{title}</Text>
  </View>
);

export default PDFHeader;
