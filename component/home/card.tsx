import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Pressable } from "react-native";
import { Heart, MessageCircle } from 'lucide-react-native';
import { router } from 'expo-router';

const HomeCard = () => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    return (
        <View 
            style={{
                width: "48%",
                height: 240,
                borderRadius: 10,
                backgroundColor: "#fff", 
                shadowColor: "#000",
                shadowOffset: { 
                    width: 0, 
                    height: 4 
                },
                shadowOpacity: 0.3, // Increased opacity for more prominence
                shadowRadius: 8, // Slightly increased radius
                elevation: 8, // Increased elevation for Android
                paddingBottom: 10,
                marginBottom: 15
            }}
        >
            {/* Pressable Section */}
            <Pressable
                onPress={() => {
                    router.push(`/detail/${324}`)
                }}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.8 : 1, 
                    flex: 1, // Đảm bảo Pressable chiếm toàn bộ không gian của View
                })}
            >
                {/* Image Section */}
                <View style={{ height: 140, marginBottom: 10 }}>
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden'
                        }}
                        source={{
                            uri: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
                        }}
                    />
                </View>

                {/* Text Description */}
                <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#000", 
                        }}
                    >
                        Learned that when a comic book movie baffles me this much,
                    </Text>
                </View>

                {/* Interaction Section */}
                <View 
                    style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }}
                >
                    {/* Likes */}
                    <TouchableOpacity 
                        onPress={handleLike}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Heart 
                            color={isLiked ? "#FF0000" : "#000"} 
                            fill={isLiked ? "#FF0000" : "none"}
                            size={20} 
                        />
                        <Text style={{ marginLeft: 5, color: "#000" }}>{likes}</Text>
                    </TouchableOpacity>

                    {/* Comments */}
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <MessageCircle color="#000" size={20} />
                        <Text style={{ marginLeft: 5, color: "#000" }}>{comments}</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    );
};

export default HomeCard;
