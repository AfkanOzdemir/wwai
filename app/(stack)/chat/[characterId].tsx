import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import RNCInput from "../../../components/base/RNCInput";
import SendMessageButton from "../../../components/chat/SendMessageButton";
import MessageBox from "../../../components/chat/MessageBox";
import Container from "../../../components/base/Container";
import { MessageProps } from "../../../types/Message";
import MessageHeader from "../../../components/chat/MessageHeader";
const API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
// const API_KEY = "sk-1c";

const Chat = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { characterId } = useLocalSearchParams();
  const [chatMeet, setChatMeet] = useState<string>("");
  const [chat, setChat] = useState<MessageProps[]>([]);

  const dialogTemplate = `Please ignore all previous instructions. I want you to respond only in Turkish I want you to act like ${characterId}. I want you to respond and answer like ${characterId} using the tone, manner and vocabulary ${characterId} would use. Do not write any explanations. Only answer like ${characterId}. You must know all of the knowledge of ${characterId}. My first sentence is Hi ${characterId}.`;

  const _init = async () => {
    try {
      setLoading(true);
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
        setLoading(false);
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
        setLoading(true);
        setChat((prevChat) => [
          ...prevChat,
          { role: "user", content: newMessage },
        ]);
        setChat((prevChat) => [
          ...prevChat,
          { role: "asistant", content: "Loading..." },
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
          setTimeout(() => {
            setChat((prevChat) => {
              prevChat.pop();
              return prevChat;
            });
            setChat((prevChat) => [
              ...prevChat,
              { role: message.message.role, content: message.message.content },
            ]);
            setLoading(false);
          }, 2000);
        }
      }
    } catch (e) {
      alert("uygulamayı yeniden baslatın");
    }
  };

  return (
    <Container>
      <MessageHeader
        CharacterID={characterId}
        chatFunc={setChat}
        resetFunc={_init}
      />
      <View className="flex-12  p-4">
        <MessageBox Chat={chat} />
        <View className="w-full h-16 px-2 flex-row items-center justify-around  ">
          <View
            className={`flex-6 p-2 px-4 font-pmedium  border border-t ${
              loading ? "border-whitesmoke" : "border-white"
            } rounded-full`}
          >
            <RNCInput
              InputOutput={chatMeet}
              setChatMeet={setChatMeet}
              idName={characterId}
              loading={loading}
            />
          </View>
          <View className="flex-1 items-center justify-center ml-4">
            <SendMessageButton
              MessageSend={sendMessage}
              Meet={chatMeet}
              ChatMeetSet={setChatMeet}
              loading={loading}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Chat;
