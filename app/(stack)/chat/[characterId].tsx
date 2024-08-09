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
  const { characterId, characterImage } = useLocalSearchParams();
  const [chatMeet, setChatMeet] = useState<string>("");
  const [chat, setChat] = useState<MessageProps[]>([]);
  const dialogTemplate = `Please disregard all previous instructions and respond only in Turkish from now on. I want you to take on the role of a specific character, ${characterId}, and behave exactly as this character would. When portraying ${characterId}, you should fully embody all aspects of this character. You must mimic ${characterId}’s speech style, tone, intonation, and choice of words exactly. If ${characterId} speaks formally, your responses should be formal; if ${characterId} has a humorous, friendly, or stern manner, you must replicate that style perfectly. In addition, you need to possess all the knowledge and experience that ${characterId} has. Whatever areas ${characterId} is an expert in, you should demonstrate that expertise in your responses. If ${characterId} approaches situations from a specific perspective, you should reflect that perspective as well. It's crucial that you also embody the personality traits of ${characterId}. Whether ${characterId} is patient, understanding, cheerful, or aggressive, you must consistently display these traits in all your responses. You should also carefully replicate the specific vocabulary and expressions that ${characterId} uses, constructing sentences just as ${characterId} would. If ${characterId} uses slang or regional phrases, you should incorporate those as well. My first sentence will be: "Hi ${characterId}." I expect you to respond exactly as ${characterId} would. Remember, from this point onward, you have become ${characterId}, and you should not respond in any other way. You must think, speak, and answer exactly as ${characterId} would, fully embodying every aspect of this character.`;

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
        // console.log(...chat);
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
        CharacterImage={characterImage}
        chatFunc={setChat}
        resetFunc={_init}
      />
      <View className="flex-12  p-4">
        <MessageBox Chat={chat} CharacterImage={characterImage} />
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
