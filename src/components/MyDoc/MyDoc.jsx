import React, { memo } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 24,
    height: "100vh",
    width: "100%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDoc = memo(() => {
  return (
    <Document>
      <Page size="A4" style={styles.page} className="cabra">
        <View style={styles.section}>
          <Text>Section #1 CABRA</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
});
MyDoc.displayName = "MyDoc";
export default MyDoc;
