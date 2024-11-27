import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NoticeCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.iconContainer}>
                    <Icon name="notifications-active" size={30} color="#FFFFFF" />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Important Update</Text>
                    <Text style={styles.description} numberOfLines={3}>
                        A critical system maintenance is scheduled for tomorrow. 
                        Please ensure all your work is saved and backed up before 
                        the maintenance window begins at 2:00 AM EST.
                    </Text>
                    <View style={styles.metaContainer}>
                        <Text style={styles.categoryTag}>System</Text>
                        <Text style={styles.metaText}>• Just now</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#F2F2F2'
    },
    card: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 6,
            },
            android: {
                elevation: 5,
            }
        }),
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    iconContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 15
    },
    contentContainer: {
        width: '80%',
        padding: 15,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 8,
        letterSpacing: 0.5
    },
    description: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 10,
        lineHeight: 22,
    },
    metaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    categoryTag: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFFFFF',
        backgroundColor: '#000000',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 15,
        marginRight: 10
    },
    metaText: {
        fontSize: 12,
        color: '#666666'
    }
});

export default NoticeCard;