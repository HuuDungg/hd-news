import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface ArticlePageProps {
    title?: string;
    content?: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ 
    title = "Default Article Title",
    content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.`
}) => {
    return (
        <View style={styles.container}>

                {/* Title Container */}
                <View style={styles.outerTitleContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{title}</Text>
                    </View>
                </View>

                {/* Content Container */}
                <View style={styles.outerContentContainer}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.contentText}>{content}</Text>
                    </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        width: '100%',
    },
    scrollContentContainer: {
        paddingBottom: 20,
    },
    outerTitleContainer: {
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    titleContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        
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
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    outerContentContainer: {
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    contentContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 15,
        
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
    contentText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
    }
});

export default ArticlePage;