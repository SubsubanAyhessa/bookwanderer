import React, { Component } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Switch,
} from "react-native";

class Inputs extends Component {
  state = {
    title: "",
    catergiries: "",
    isEnabled: false,
  };
  bookTitle = (text) => {
    this.setState({ title: text });
  };
  bookCategories = (text) => {
    this.setState({ catergiries: text });
  };
  toggleSwitch = () => this.setState({ isEnabled: !this.state.isEnabled });
  createTutorial = (title, catergiries, isEnabled) => {
    console.log(
      "Book Title: " +
        title +
        "\nCategories: " +
        catergiries +
        "\npublished: " +
        isEnabled
    );

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: title,
      catergiries: catergiries,
      published: isEnabled,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost(IP Address):8080/api/tutorials", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="   Title"
          placeholderTextColor="#BC8F8F"
          autoCapitalize="none"
          onChangeText={this.bookTitle}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="   Categories"
          placeholderTextColor="#BC8F8F"
          autoCapitalize="none"
          onChangeText={this.bookCategories}
        />
        <View style={styles.switchContainer}>
          <Text
            style={{
              color: "#BC8F8F",
              fontSize: 14,
              marginLeft: 18,
            }}
          >
            Published:{" "}
          </Text>
          <View style={styles.container1}>
            <Switch
              trackColor={{ false: "#767577", true: "#BC8F8F" }}
              thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={this.state.isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.createTutorial(
              this.state.title,
              this.state.catergiries,
              this.state.isEnabled
            )
          }
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#BC8F8F",
    borderRadius: 15,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#BC8F8F",
    padding: 10,
    margin: 15,
    height: 40,
    marginTop: 20,
    borderRadius: 50,
  },
  submitButtonText: {
    color: "white",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 15,
    height: 40,
    flexDirection: "row",
    borderColor: "#BC8F8F",
  },
});
