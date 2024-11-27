import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/AntDesign';

const DetailTabar = () => {
    // Mock data - replace with actual data from your app's state or props
    const postDetails = {
        likes: 256,
        comments: 42,
        publishDate: new Date('2024-02-15'),
        category: 'Technology',
    };

    // Format date to a more readable format
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <View style={styles.statsContainer}>
                    {/* Likes */}
                    <View style={styles.statItem}>
                        <HeartIcon 
                            name="heart" 
                            size={16} 
                            color="red" 
                        />
                        <Text style={styles.statText}>
                            {postDetails.likes}
                        </Text>
                    </View>

                    {/* Comments */}
                    <View style={styles.statItem}>
                        <Icon 
                            name="message-circle" 
                            size={16} 
                            color="black" 
                        />
                        <Text style={styles.statText}>
                            {postDetails.comments}
                        </Text>
                    </View>

                    {/* Publish Date */}
                    <View style={styles.statItem}>
                        <Icon 
                            name="calendar" 
                            size={16} 
                            color="black" 
                        />
                        <Text style={styles.statText}>
                            {formatDate(postDetails.publishDate)}
                        </Text>
                    </View>

                    {/* Category */}
                    <View style={styles.statItem}>
                        <Icon 
                            name="tag" 
                            size={16} 
                            color="black" 
                        />
                        <Text style={styles.statText}>
                            {postDetails.category}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 15,
        
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
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    statText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500'
    }
});

export default DetailTabar;