import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Button = ({ text, link }: { text: string; link: string }) => {
    return (
        <Link href={link} className="px-6 py-2 bg-primary rounded-xl items-center justify-center">
            <Text className="text-white font-psemibold text-center">{text}</Text>
        </Link>
    );
};

export default Button;
