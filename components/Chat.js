import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const Chat = ({ route, navigation }) => {
  // Imported name and Background color from start page
  const { name } = route.params;
  const { bgColor } = route.params;

  // Sets value of messages, past and new messages
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  // Customizes chat bubbles styling
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: { color: "white" },
        }}
        wrapperStyle={{
          right: { backgroundColor: "#3C6EEE" },
          left: { backgroundColor: "#FFF" },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <GiftedChat
        renderBubble={renderBubble}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

// Chat Page Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "300",
  },
});

export default Chat;
