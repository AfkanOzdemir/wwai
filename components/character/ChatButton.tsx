import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const ChatButton = () => {
    return (
        <Pressable
            onPress={() => { }}
            className="w-full py-3 bg-primary rounded-full flex-row space-x-2 items-center justify-center absolute bottom-5 right-5"
        >
            <Ionicons name="chatbubble-ellipses" size={24} color="white" />
            <Text className="text-white font-pmedium">Muhammed Ali ile Sohbete Et</Text>
        </Pressable>
    )
}

export default ChatButton