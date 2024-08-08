import { SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-background">{children}</SafeAreaView>
  );
};

export default Container;
