import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import ChatScreen from "./ChatScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0078fe" barStyle="light-content" />
      <ChatScreen />
    </SafeAreaView>
  );
}