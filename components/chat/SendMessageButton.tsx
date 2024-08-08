import { TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../base/Loading";
import { SendMessageButtonProps } from "../../types/Message";

const SendMessageButton = ({
  MessageSend,
  Meet,
  ChatMeetSet,
  loading,
}: SendMessageButtonProps) => {
  return (
    <TouchableOpacity
      className="p-2 bg-primary rounded-full items-center justify-center"
      onPress={() => {
        MessageSend(Meet);
        ChatMeetSet("");
      }}
    >
      {!loading ? (
        <Ionicons name="send-outline" size={24} color="white" />
      ) : (
        <Loading />
      )}
    </TouchableOpacity>
  );
};

export default SendMessageButton;
