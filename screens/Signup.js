import React from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  Item,
  View,
  TextInput,
  TouchableOpacity,
  Body,
  Button,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../src/images/bgimage.jpg")}
        style={{
          height: Dimensions.get("window").height / 2.5,
          top: 0,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../src/images/logo.png")}
            style={{ width: 300, height: 150 }}
          />
          <Text
            style={{
              color: "#BC8F8F",
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "uppercase",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Book Wanderer 2.0
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1.5,
          bottom: 50,
          backgroundColor: "#ffffff",
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
        }}
      >
        <View style={{ padding: 30 }}>
          <Text style={{ color: "#BC8F8F", fontSize: 34 }}>Welcome</Text>
          <Text>
            Already have an account?
            <Text
              style={{ color: "red", fontStyle: "italic" }}
              onPress={() => navigation.navigate("Login")}
            >
              {" "}
              Login here
            </Text>
          </Text>
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                width: 320,
                height: 50,
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingLeft: 15,
                marginTop: 20,
                marginHorizontal: 25,
                color: "black",
              }}
              placeholder={"First Name"}
              placeholderTextColor="rgb(255, 255, 255, 0.7)"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                width: 320,
                height: 50,
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingLeft: 15,
                marginTop: 20,
                marginHorizontal: 25,
                color: "black",
              }}
              placeholder={"Last Name"}
              placeholderTextColor="rgb(255, 255, 255, 0.7)"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                width: 320,
                height: 50,
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingLeft: 15,
                marginTop: 20,
                marginHorizontal: 25,
                color: "black",
              }}
              placeholder={"Email"}
              placeholderTextColor="rgb(255, 255, 255, 0.7)"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                width: 320,
                height: 50,
                backgroundColor: "rgba(0, 0, 0, 0.12)",
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                paddingLeft: 15,
                marginTop: 20,
                marginHorizontal: 25,
                color: "black",
              }}
              placeholder={"Password"}
              secureTextEntry={true}
              placeholderTextColor="rgb(255, 255, 255, 0.7)"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={{
                width: "50%",
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                opacity: 0.8,
                backgroundColor: "#BC8F8F",
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ fontSize: 16, color: "#FFFFFF" }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUpScreen;
