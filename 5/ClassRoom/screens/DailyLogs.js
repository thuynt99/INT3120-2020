import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

export default class DailyLogs extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.comming}>Comming soon</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  contentContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 15,
  },
  comming: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
});
