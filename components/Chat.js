import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  const { name } = route.params;
  const { bgColor } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.text}>You are now Chatting!</Text>
    </View>
  );
};

// Chat Page Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    fontSize: 40,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "300",
  },
});

export default Chat;
