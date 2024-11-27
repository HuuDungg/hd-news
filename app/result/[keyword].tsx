import ShortCard from "@/component/short/card";
import { useNavigation } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useEffect, useLayoutEffect } from "react";
import { ScrollView, Text, View } from "react-native"

const ResultPage = ()=>{
    const { keyword } = useLocalSearchParams();
    const navigation = useNavigation();
    useLayoutEffect(() => {
    if (keyword) {
      navigation.setOptions({ 
        title: `Results for "${keyword}"`,
    });
    }
  }, [keyword, navigation]);
    return(
        <>
            <View>
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
};

export default ResultPage;