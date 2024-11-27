import HomeCard from "@/component/home/card";
import HomeCarousel from "@/component/home/carousel";
import Header from "@/component/home/header";
import HomePost from "@/component/home/post";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Header />
        </View>
                <View
        style={{
            height: 100
        }}
        ></View>
        <View>
          <ScrollView
            style={{
            }}
          >
            {/* carousel */}
            <View>
              <HomeCarousel />
            </View>
            {/* card news */}
            <View
              style={{
                flexDirection: "row", 
                flexWrap: 'wrap', // Cho phép các phần tử xuống dòng khi cần
                justifyContent: 'space-between', // Cách đều các phần tử
                marginHorizontal: 10, // Thêm margin nếu cần
              }}
            >
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
              <HomeCard  /> 
            </View>
            {/* post new */}
            <View
            style={{
                justifyContent: "center",
                alignItems: 'center'
            }}
            >
                <HomePost />
                <HomePost />
                <View
                style={{
                    height: 170
                }}
                ></View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomePage;
