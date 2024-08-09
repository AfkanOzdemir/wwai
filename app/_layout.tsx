import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import Context from "../context";
import { ToastProvider } from "react-native-toast-notifications";

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Context.Provider value={{ apiData: apiData, setApiData: setApiData }}>
      <ToastProvider dangerColor="red">
        <Slot />
      </ToastProvider>
    </Context.Provider>
  );
};

export default _layout;
