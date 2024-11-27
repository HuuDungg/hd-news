import NoticeCard from "@/component/notice/card";
import { ScrollView, Text, View } from "react-native"
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
const NoticePage = ()=>{
    return(
        <>
        <SafeAreaView>
            <ScrollView>
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default NoticePage;