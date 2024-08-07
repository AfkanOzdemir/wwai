import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'
import React from 'react'

const characterDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Details of user {id}</Text>
        </View>
    )
}

export default characterDetails