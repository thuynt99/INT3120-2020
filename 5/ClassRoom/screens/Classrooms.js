import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Class from "../components/Class";

import { Feather } from "@expo/vector-icons/";
import Colors from "../constants/Colors";

export default class Classrooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          id: "a1",
          name: "Toán (Thứ 2, tiết 1-3)",
        },
      ],
    };
  }

  render() {
    const { classes } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <Button
            icon={
              <Feather
                name="plus"
                size={20}
                color={Colors.iconColor}
                style={{
                  marginBottom: -3,
                  marginRight: 2,
                }}
              />
            }
            title="Tham gia"
            type="clear"
          />
        </View>
        <ScrollView>
          {classes.map((each) => (
            <Class key={each.id} name={each.name} id={each.id} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttonGroup: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 40,
  },
});
