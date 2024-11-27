import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Pressable } from 'react-native';

const ShortCard = () => {

    return (
        <Pressable 
            style={({ pressed }) => ({
                    opacity: pressed ? 0.8 : 1, // Thêm hiệu ứng khi nhấn
                    flex: 1, // Đảm bảo Pressable chiếm toàn bộ không gian của View
                })}
            onPress={() => {
                router.push(`/detail/${324}`); // Chuyển hướng đến trang chi tiết
            }}
        >
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={{ uri: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048' }} 
                        style={styles.image} 
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Venom: A Cinematic Journey</Text>
                    <Text style={styles.description} numberOfLines={3}>
                        Dive into the dark and complex world of Venom, exploring 
                        the antihero's evolution from a menacing symbiote to a 
                        complex character that challenges traditional superhero narratives.
                    </Text>
                    <View style={styles.metaContainer}>
                        <Text style={styles.categoryTag}>Entertainment</Text>
                        <Text style={styles.metaText}>• 7 min read</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 6,
            },
            android: {
                elevation: 5,
            }
        }),
        borderWidth: 1,
        borderColor: '#E6E9EF',
    },
    imageContainer: {
        width: '35%',
    },
    image: {
        width: '100%',
        height: 150,
    },
    contentContainer: {
        width: '65%',
        padding: 15,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2C3E50',
        marginBottom: 8,
        letterSpacing: 0.5
    },
    description: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 10,
        lineHeight: 22,
        opacity: 0.8
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    categoryTag: {
        fontSize: 12,
        fontWeight: '600',
        color: '#3498DB',
        backgroundColor: '#E8F4F8',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        marginRight: 10
    },
    metaText: {
        fontSize: 12,
        color: '#7F8C8D'
    }
});

export default ShortCard;
