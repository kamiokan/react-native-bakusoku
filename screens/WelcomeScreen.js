import React from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SLIDE_DATA = [
  { title: "Step: 1", text: "aaa" },
  { title: "Step: 2", text: "bbb" },
  { title: "Step: 3", text: "ccc" },
];

class WelcomeScreen extends React.Component {
  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
          key={index}
          style={{
            flex: 1,
            backgroundColor: "skyblue",
            width: SCREEN_WIDTH,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 2,
              backgroundColor: "pink",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{slide.title}</Text>
            <Text>{slide.text}</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "orange",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>{index + 1} / 3</Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default WelcomeScreen;
