import { FlatList } from "react-native";
import React from "react";
import MessageBubble from "../base/MessageBubble";

const MessageBox = ({
  Chat,
  CharacterImage,
  Loading,
}: {
  Chat: any;
  CharacterImage: any;
  Loading: Function;
}) => {
  return (
    <FlatList
      className="h-full w-full bg-background"
      showsVerticalScrollIndicator={false}
      data={Chat}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <MessageBubble
          key={index}
          Loading={Loading}
          dataItem={{
            role: item.role,
            content: item.content,
            image: CharacterImage,
          }}
        />
      )}
    />
  );
};

export default MessageBox;
