import ShortCard from "@/component/short/card";
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const ShortPage = ()=>{
    return(
        <>
        <View
        style={{
            marginTop: 60
        }}
        >
            <ScrollView>
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
                <ShortCard />
            </ScrollView>
        </View>
        </>
    )
}

export default ShortPage;