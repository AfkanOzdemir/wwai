import { View, Text, } from 'react-native'
import React from 'react'
import { Slot } from "expo-router";

const ContentBox = ({ content, children }: { content: string, children: React.ReactNode }) => {
    return (
        <View className="flex-1 bg-background rounded-xl mb-3 py-4 overflow-hidden">
            <View className="p-3">
                <Text className="font-pmedium text-primary text-base mb-2">
                    {content}
                </Text>
                {children}
            </View>
        </View>
    )
}

export default ContentBox