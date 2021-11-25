import React from "react";
import { View, Button, Text } from "react-native";

function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ paddingBottom: 20, fontSize: 20 }}>Home Page</Text>
      <Button
        onPress={() => navigation.navigate("Search")}
        title="Next Screen"
      ></Button>
    </View>
  );
}

export default HomePage;
