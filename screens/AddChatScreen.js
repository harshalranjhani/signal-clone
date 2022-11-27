import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = React.useState("");

  const createChat = async () => {
    try {
      const response = await db.collection("chats").add({ chatName: input });
      navigation.goBack();
    } catch (e) {
      alert(e.message);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Input
        autoFocus
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        onSubmitEditing={createChat}
      ></Input>
      <Button
        disabled={!input}
        onPress={createChat}
        title="Create new chat"
      ></Button>
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
