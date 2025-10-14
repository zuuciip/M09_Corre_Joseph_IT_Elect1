//ChatScreen.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (text.trim() !== "") {
      setMessages([...messages, { id: Date.now().toString(), text, type: "text" }]);
      setText("");
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });
    if (!result.canceled) {
      setMessages([
        ...messages,
        { id: Date.now().toString(), uri: result.assets[0].uri, type: "image" },
      ]);
    }
  };

  return (
    <ImageBackground
      source={require("./assets/Screen.jpg")} // 👈 adjust path if needed
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>💬 Chat Screen</Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.type === "text" ? (
            <Text style={styles.message}>{item.text}</Text>
          ) : (
            <Image source={{ uri: item.uri }} style={styles.imageMessage} />
          )
        }
        contentContainerStyle={styles.messageList}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.icon}>🖼️</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    backgroundColor: "#004aad",
    padding: 12,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  messageList: {
    flexGrow: 1,
    padding: 10,
  },
  message: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    marginVertical: 4,
    alignSelf: "flex-start",
  },
  imageMessage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 8,
  },
  icon: {
    fontSize: 22,
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  sendButton: {
    backgroundColor: "#0078fe",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 6,
  },
  sendText: {
    color: "white",
    fontWeight: "bold",
  },
});