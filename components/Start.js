import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

// Background Image
const image = require("../img/background-img.png");

const Start = ({ navigation }) => {
  // Initiating User's name and Chosen Background Color for Chat Screen
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("");

  return (
    <ImageBackground source={image} style={styles.image}>
      {/* Apps Title */}

      <Text style={styles.title}>Chat App</Text>

      {/* Text Input Container */}

      <View style={styles.boxContainer}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        />

        {/* Choose Background Color Container w/ Buttons */}

        <View>
          <Text style={styles.colorText}>Choose BackGround Color:</Text>
          <View style={styles.buttonColors}>
            <TouchableOpacity
              style={[styles.colorButton, styles.buttonBgColor1]}
              onPress={() => {
                setBgColor(styles.buttonBgColor1.backgroundColor);
              }}
            />

            <TouchableOpacity
              style={[styles.colorButton, styles.buttonBgColor2]}
              onPress={() => {
                setBgColor(styles.buttonBgColor2.backgroundColor);
              }}
            />

            <TouchableOpacity
              style={[styles.colorButton, styles.buttonBgColor3]}
              onPress={() => {
                setBgColor(styles.buttonBgColor3.backgroundColor);
              }}
            />

            <TouchableOpacity
              style={[styles.colorButton, styles.buttonBgColor4]}
              onPress={() => {
                setBgColor(styles.buttonBgColor4.backgroundColor);
              }}
            />
          </View>
        </View>

        {/* Start Chatting Button */}

        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => {
            navigation.navigate("Chat", { name: name, bgColor: bgColor });
          }}
        >
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Start Page Styles

const styles = StyleSheet.create({
  boxContainer: {
    height: "44%",
    width: "88%",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 30,
    justifyContent: "space-evenly",
    borderRadius: 15,
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1.3,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
    borderRadius: 3,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 225,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  colorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    margin: 10,
    textAlign: "left",
  },
  buttonColors: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-evenly",
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  buttonBgColor1: {
    backgroundColor: "#090C08",
  },
  buttonBgColor2: {
    backgroundColor: "#474056",
  },
  buttonBgColor3: {
    backgroundColor: "#8A95A5",
  },
  buttonBgColor4: {
    backgroundColor: "#B9C6AE",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  chatButton: {
    backgroundColor: "#757083",
    width: "88%",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Start;
