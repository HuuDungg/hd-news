import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { TouchableOpacity, View, Share, Linking, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/AntDesign';

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
            {/* Your page content */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    headerIcons: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 15, 
        marginRight: 10 
    }
});

export default Detailpage;