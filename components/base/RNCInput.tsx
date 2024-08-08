import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const RNCInput = ({
  InputOutput,
  setChatMeet,
  idName,
  loading,
}: {
  InputOutput: string;
  setChatMeet: Function;
  idName: string | string[];
  loading: boolean;
}) => {
  return (
    <TextInput
      className="text-white"
      placeholder={`Merhaba ${idName}`}
      value={InputOutput}
      onChangeText={(text) => setChatMeet(text)}
      editable={!loading}
      placeholderTextColor={"#8d8d9d"}
    />
  );
};

export default RNCInput;
