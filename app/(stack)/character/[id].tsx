import {
  Text,
  Pressable,
  TextInput,
  Button,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
// const API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
const API_KEY = "sk-1c";

const App = () => {
  const { id } = useLocalSearchParams();
  const [chatMeet, setChatMeet] = useState<string>("");
  const [chat, setChat] = useState<{ role: string; content: string }[]>([]);

  const dialogTemplate = `Please ignore all previous instructions. I want you to respond only in Turkish I want you to act like ${id}. I want you to respond and answer like ${id} using the tone, manner and vocabulary ${id} would use. Do not write any explanations. Only answer like ${id}. You must know all of the knowledge of ${id}. My first sentence is Hi ${id}.`;

  const _init = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: dialogTemplate,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const message = data.choices[0];

      if (message) {
        setChat((prevChat) => [
          ...prevChat,
          { role: message.message.role, content: message.message.content },
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    _init();
  }, []);

  const sendMessage = async (newMessage: string) => {
    try {
      if (newMessage) {
        setChat((prevChat) => [
          ...prevChat,
          { role: "user", content: newMessage },
        ]);
        console.log(...chat);
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                { role: "user", content: dialogTemplate },
                ...chat,
                {
                  role: "user",
                  content: newMessage,
                },
              ],
            }),
          }
        );
        const data = await response.json();
        const message = data.choices[0];
        if (message) {
          setChat((prevChat) => [
            ...prevChat,
            { role: message.message.role, content: message.message.content },
          ]);
        }
      }
    } catch (e) {
      alert("uygulamayı yeniden baslatın");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="w-full flex-1 flex-row border-b py-2 border-[#1c1c2c] mb-3">
        <View className="flex-1">
          <Image source={require("../../../assets/ChatGPT-Logo.png")} className="w-full h-full absolute z-0" contentFit="cover" transition={500} />
        </View>
        <View className="mx-4 flex-5 flex-row items-center justify-between">
          <View>
            <Text className="font-psemibold text-white">{id}</Text>
          </View>
          <TouchableOpacity className="p-2 bg-primary rounded-full items-center justify-center" onPress={() => { setChat([]); _init(); }}>
            <Ionicons name="refresh" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-12  p-4">
        <FlatList className="h-full w-full bg-background"
          showsVerticalScrollIndicator={false} data={chat} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
            item.role === "user" ? (
              <View className="flex-row items-center justify-end mb-4">
                <View className="p-2 px-4 bg-primary rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                  <Text className="text-white font-pmedium">{item.content}</Text>
                </View>
              </View>
            ) : (
              <View
                className="flex-col items-start justify-start mb-4"
              >
                <View className="flex-row items-center justify-start relative">
                  <View>
                    <Image source={require("../../../assets/ChatGPT-Logo.png")} className="w-8 h-8 rounded-full absolute " />
                  </View>
                  <View className="p-2 px-4 bg-[#2f2f44] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl ml-10">
                    <Text className="text-white font-pmedium">{item.content}</Text>
                  </View>
                </View>
              </View>
            )
          )} />

        <View className="w-full h-16 px-2 flex-row items-center justify-around  ">
          <View className="flex-6 p-2 px-4 font-pmedium  border border-t border-white rounded-full">
            <TextInput
              placeholderTextColor={"#8d8d9d"}
            className="text-white"
            placeholder={`Merhaba ${id}`}
            value={chatMeet}
            onChangeText={(text) => setChatMeet(text)}
            />
          </View>
          <View className="flex-1 items-center justify-center ml-4">
            <TouchableOpacity className="p-2 bg-primary rounded-full items-center justify-center" onPress={() => { sendMessage(chatMeet); setChatMeet(""); }}>
              <Ionicons name="send-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
