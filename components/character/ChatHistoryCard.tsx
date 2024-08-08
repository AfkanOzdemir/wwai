import { View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'

const ChatHistoryCard = ({ image, name, content }: { image: string, name: string, content: string }) => {
    return (
        <Pressable className="bg-secondary p-3 rounded-xl mb-3">
            <View className="flex-row justify-start items-center overflow-hidden relative">
                <Image
                    source={image}
                    className="w-14 h-14 rounded-full mr-4"
                />
                <View>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-white font-pmedium">{name}</Text>
                    </View>
                    <Text className="text-slate-300 font-plight">{content}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ChatHistoryCard