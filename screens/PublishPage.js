import React from "react";
import { View, Button, Text } from "react-native";
import Inputs from "./Inputs";

function PublishPage() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", width: 300, marginLeft: 70 }}
    >
      <Text style={{ fontSize: 30, color: "#BC8F8F" }}>Publish Page</Text>
      <Inputs></Inputs>
    </View>
  );
}

export default PublishPage;
