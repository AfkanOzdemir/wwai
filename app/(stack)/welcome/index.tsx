import { View, Text, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import Steps from '../../../components/welcome/Steps'
import { router } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage';



const index = () => {
    const [step, setStep] = useState(0)

    const storeData = async (value: boolean) => {
        try {
            await AsyncStorage.setItem('isWelcomeVisited', value.toString());
        } catch (e) {
            console.log(e)
        }
    };
    storeData(false)



    return (
        <SafeAreaView className="flex-1 bg-background p-4">
            <View className='flex-11 flex items-center justify-center'>
                <View className='w-full h-4/5 rounded-full overflow-hidden'>
                    {
                        step === 0 ? (
                            <Image source={"https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"} className='w-full h-full' />
                        ) : step === 1 ? (
                            <Image source={"https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"} className='w-full h-full' />
                        ) : (
                            <Image source={"https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"} className='w-full h-full' />
                        )
                    }
                </View>
                <Text className='text-white text-lg font-pmedium mt-4 text-center'>

                </Text>
            </View>
            <View className='flex-4 bg-secondary rounded-xl p-4 justify-between'>
                <View className='flex-row mb-3'>
                    {
                        Array(3).fill(0).map((_, index) => (
                            <View key={index} className={`w-8 h-1 rounded-full bg-white mr-2 ${index === step ? 'bg-primary' : ''}`}></View>
                        ))
                    }
                </View>
                {
                    step === 0 ? (
                        <Steps title="WWai'a Hoşgeldin!" content='WWai üzerinden çeşitli karakterler ile sohbet edebilir, kendi karakterini oluşturabilirsin. Hadi başlayalım!' >
                            <Pressable onPress={() => setStep(1)} className='bg-primary rounded-xl p-2'>
                                <Text className='text-white text-lg font-pmedium text-center'>Devam et</Text>
                            </Pressable>
                        </Steps>
                    ) : step === 1 ? (
                        <Steps title="Karakterini Oluştur" content='Karakterini oluştur ve sohbete başla!' >
                            <Pressable onPress={() => setStep(2)} className='bg-primary rounded-xl p-2'>
                                <Text className='text-white text-lg font-pmedium text-center'>Devam et</Text>
                            </Pressable>
                        </Steps>
                    ) : (
                        <Steps title="Sohbet Başlasın!" content='Artık sohbete başlayabilirsin!' >
                            <Pressable onPress={async () => {
                                await AsyncStorage.setItem('isWelcomeVisited', "true");
                                router.push('')
                            }} className='bg-primary rounded-xl p-2'>
                                <Text className='text-white text-lg font-pmedium text-center'>Haydi Konuşmaya Başla!</Text>
                            </Pressable>
                        </Steps>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

export default index