import SettingProfile from "@/component/setting/profile";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const SettingPage = ()=>{
    return(
        <>
        <View
        style={{
            flex: 1,
            marginTop: 60
        }}
        >
            <SettingProfile />
        </View>
        </>
    )
}

export default SettingPage;