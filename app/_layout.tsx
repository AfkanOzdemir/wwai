import { Slot, SplashScreen } from "expo-router";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [apiData, setApiData] = useState<any>();
  const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
  });

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isWelcomeVisited');
      if (value !== "true") {
        SplashScreen.preventAutoHideAsync();
      } else{
        SplashScreen.hideAsync();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Slot/>;

};

export default _layout;
