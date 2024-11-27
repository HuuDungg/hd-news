import { Text, View } from "react-native";
import ShortCard from "../short/card";

const RelatedArticle = ()=>{
    return(
        <>
            <View
            style={{
                marginHorizontal: 10,
                gap: 20,
                justifyContent: "center",
            }}
            >
                <View
                    style={{
                        width: 150,
                        height: 50,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        borderRadius: 30,
                        marginTop:10 ,
                        // Shadow styles for iOS
                        shadowColor: '#000',
                        shadowOffset: { 
                            width: 0, 
                            height: 2 
                        },
                        shadowOpacity: 0.15,
                        shadowRadius: 4,
                        
                        // Elevation for Android
                        elevation: 5,
                        alignSelf: "center"
                    }}
                >
                    <Text>Related article</Text>
                </View>
                <View
                style={{
                    gap: 10
                }}
                >
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                    <ShortCard />
                </View>
                <View
                    style={{
                        height: 80
                    }}
                ></View>
            </View>
        </>
    )

}

export default RelatedArticle;