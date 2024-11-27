import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tran Huu Dung</Text>
      <Link href={"/(tabs)/home"}>go to home</Link>
    </View>
  );
}
