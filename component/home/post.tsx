import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Pressable } from "react-native";
import { Heart, MessageCircle } from 'lucide-react-native';
import { router } from 'expo-router';

const HomePost = () => {
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
                width: "95%",
                height: 350, // Increased height to accommodate footer
                borderColor: "#ddd",
                borderWidth: 1,
                marginBottom: 10,
                borderRadius: 10,
                backgroundColor: "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 6,
                elevation: 5,
                padding: 10,
            }}
        >
            {/* Pressable Section */}
            <Pressable
                onPress={() => {
                    router.push(`/detail/${324}`)
                }}
                style={({ pressed }) => ({
                    opacity: pressed ? 0.8 : 1, // Thêm hiệu ứng khi nhấn
                    flex: 1, // Đảm bảo Pressable chiếm toàn bộ không gian của View
                })}
            >
                {/* Image Section */}
                <View style={{ height: 220, marginBottom: 10 }}>
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 8,
                            overflow: 'hidden'
                        }}
                        source={{
                            uri: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
                        }}
                    />
                </View>

                {/* Text Description */}
                <View style={{ marginBottom: 10 }}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "#333",
                            paddingHorizontal: 5
                        }}
                    >
                        Learned that when a comic book movie baffles me this much,
                    </Text>
                </View>

                {/* Interaction Footer */}
                <View 
                    style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        paddingHorizontal: 5,
                        marginTop: 10,
                        borderTopWidth: 1,
                        borderTopColor: '#f0f0f0',
                        paddingTop: 10
                    }}
                >
                    {/* Likes */}
                    <TouchableOpacity 
                        onPress={handleLike}
                        style={{ 
                            flexDirection: 'row', 
                            alignItems: 'center' 
                        }}
                    >
                        <Heart 
                            color={isLiked ? "#FF0000" : "#333"} 
                            fill={isLiked ? "#FF0000" : "none"}
                            size={20} 
                        />
                        <Text 
                            style={{ 
                                marginLeft: 5, 
                                color: "#333",
                                fontSize: 12
                            }}
                        >
                            {likes} Likes
                        </Text>
                    </TouchableOpacity>

                    {/* Comments */}
                    <TouchableOpacity 
                        style={{ 
                            flexDirection: 'row', 
                            alignItems: 'center' 
                        }}
                    >
                        <MessageCircle 
                            color="#333" 
                            size={20} 
                        />
                        <Text 
                            style={{ 
                                marginLeft: 5, 
                                color: "#333",
                                fontSize: 12
                            }}
                        >
                            {comments} Comments
                        </Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    );
};

export default HomePost;
