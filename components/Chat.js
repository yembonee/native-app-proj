import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { useEffect, useState } from "react";
import { StyleSheet, View, Platform, KeyboardAvoidingView } from "react-native";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputToolbar } from "react-native-gifted-chat";

const Chat = ({ route, navigation, db, isConnected }) => {
  // Imported name and Background color from start page
  const { name, bgColor } = route.params;

  // Sets value of messages, past and new messages
  const [messages, setMessages] = useState([]);
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  let unsubMessages;

  useEffect(() => {
    navigation.setOptions({ title: name });
    if (isConnected === true) {
      if (unsubMessages) unsubMessages();
      unsubMessages = null;

      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      unsubMessages = onSnapshot(q, (documentSnapshot) => {
        let newMessages = [];
        documentSnapshot.forEach((doc) => {
          newMessages.push({
            id: doc.id,
            ...doc.data(),
            createdAt: new Date(doc.data().createdAt.toMillis()),
          });
        });
        cacheMessages(newMessages);
        setMessages(newMessages);
      });
      return () => {
        if (unsubMessages) unsubMessages();
      };
    }
  }, [isConnected]);

  const renderInputToolBar = (props) => {
    if (isConnected) return <InputToolbar {...props} />;
    else return null;
  };

  const cacheMessages = async (messagesToCache) => {
    try {
      await AsyncStorage.setItem("messages", JSON.stringify(messagesToCache));
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadCachedMessages = async () => {
    const cachedMessages = (await AsyncStorage.getItem("messages")) || [];
    setMessages(JSON.parse(cachedMessages));
  };

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
      {isConnected === true ? (
        <GiftedChat
          renderInputToolbar={renderInputToolbar}
          renderBubble={renderBubble}
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: route.params.id,
            name: name,
          }}
        />
      ) : null}
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
