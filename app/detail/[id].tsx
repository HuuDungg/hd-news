import { router, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity, View, Share, Linking, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import DetailTabar from "@/component/detail/tabar";
import ArticlePage from "@/component/detail/article";
import RelatedArticle from "@/component/detail/related";

const Detailpage = () => {
    const navigation = useNavigation();
    const [isLiked, setIsLiked] = useState(false);

    // Function to handle sharing
    const handleShare = async () => {
        try {
            const result = await Share.share({
                title: 'Check out this content',
                message: 'I want to share this amazing article with you!',
                // Add your actual share URL here
                url: 'https://example.com/article'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    // Function to open original article
    const openOriginalArticle = () => {
        // Replace with your actual article URL
        const articleUrl = 'https://example.com/original-article';
        Linking.openURL(articleUrl).catch(err => 
            console.error('Failed to open URL:', err)
        );
    };

    const navigateToComments = () => {
        router.push(`/comment/${48732}`)
    }

    // Function to handle like/unlike
    const handleLike = () => {
        setIsLiked(!isLiked);
        // You can add additional logic here, like saving to favorites
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={styles.headerIcons}>
                    {/* Like/Heart Button */}
                    <TouchableOpacity onPress={handleLike}>
                        <HeartIcon 
                            name={isLiked ? 'heart' : 'hearto'} 
                            size={24} 
                            color={isLiked ? 'red' : 'black'}
                        />
                    </TouchableOpacity>

                    {/* Comments Button */}
                    <TouchableOpacity onPress={navigateToComments}>
                        <Icon 
                            name="message-circle" 
                            size={24} 
                            color="black" 
                        />
                    </TouchableOpacity>

                    {/* Original Article Link */}
                    <TouchableOpacity onPress={openOriginalArticle}>
                        <Icon 
                            name="link" 
                            size={24} 
                            color="black" 
                        />
                    </TouchableOpacity>

                    {/* Share Button */}
                    <TouchableOpacity onPress={handleShare}>
                        <Icon 
                            name="share-2" 
                            size={24} 
                            color="black" 
                        />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, isLiked]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} removeClippedSubviews={true}>
                {/* Image Container with Floating Card Style */}
                <View style={styles.outerImageContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
                            }} 
                            resizeMode="cover"
                        />
                    </View>
                </View>
                
                <View>
                    <DetailTabar />
                </View>

                <View>
                    <ArticlePage />
                </View>

                <View>
                    <RelatedArticle />
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center' 
    },
    scrollContainer: {
        height: 'auto'
    },
    outerImageContainer: {
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    imageContainer: {
        width: '100%',
        height: 250, 
        backgroundColor: '#ffffff',
        borderRadius: 12,
        
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
        
        // Ensure image is clipped to border radius
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    headerIcons: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 15, 
        marginRight: 10 
    }
});

export default Detailpage;