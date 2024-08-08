import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerProps } from "../../types/Message";

const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView className="flex-1 bg-background">{children}</SafeAreaView>
  );
};

export default Container;
