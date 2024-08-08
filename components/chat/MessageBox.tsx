import { FlatList } from "react-native";
import React from "react";
import MessageBubble from "../base/MessageBubble";
import { MessageProps } from "../../types/Message";

const MessageBox = ({ Chat }: { Chat: MessageProps[] }) => {
  return (
    <FlatList
      className="h-full w-full bg-background"
      showsVerticalScrollIndicator={false}
      data={Chat}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <MessageBubble
          key={index}
          dataItem={{ role: item.role, content: item.content }}
        />
      )}
    />
  );
};

export default MessageBox;
