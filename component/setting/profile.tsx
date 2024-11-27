import React from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingProfile = () => {
    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.card}>
                <View style={styles.profileHeader}>
                    <View style={styles.profileImageContainer}>
                        <Image 
                            source={{ uri: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048' }} 
                            style={styles.profileImage} 
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.profileInfoContainer}>
                        <Text style={styles.profileName}>Dan Robert</Text>
                        <Text style={styles.profileEmail}>huudung2004kt@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.settingsSection}>
                    <TouchableOpacity style={styles.settingItem}>
                        <Icon name="person" size={24} color="#000" style={styles.settingIcon} />
                        <Text style={styles.settingText}>Edit Profile</Text>
                        <Icon name="chevron-right" size={24} color="#666" style={styles.chevronIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Icon name="security" size={24} color="#000" style={styles.settingIcon} />
                        <Text style={styles.settingText}>Privacy & Security</Text>
                        <Icon name="chevron-right" size={24} color="#666" style={styles.chevronIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Icon name="face-5" size={24} color="#000" style={styles.settingIcon} />
                        <Text style={styles.settingText}>About Me</Text>
                        <Icon name="chevron-right" size={24} color="#666" style={styles.chevronIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.statsSection}>
                    <Text style={styles.statsSectionTitle}>My Stats</Text>
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>245</Text>
                            <Text style={styles.statLabel}>Posts</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>13K</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statValue}>567</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.activitySection}>
                    <Text style={styles.statsSectionTitle}>Recent Activity</Text>
                    <View style={styles.activityItem}>
                        <Icon name="favorite" size={20} color="#000" style={styles.activityIcon} />
                        <Text style={styles.activityText}>Liked a post by Sarah</Text>
                        <Text style={styles.activityTime}>2h ago</Text>
                    </View>
                    <View style={styles.activityItem}>
                        <Icon name="comment" size={20} color="#000" style={styles.activityIcon} />
                        <Text style={styles.activityText}>Commented on a photo</Text>
                        <Text style={styles.activityTime}>5h ago</Text>
                    </View>
                    <View style={styles.activityItem}>
                        <Icon name="share" size={20} color="#000" style={styles.activityIcon} />
                        <Text style={styles.activityText}>Shared a post</Text>
                        <Text style={styles.activityTime}>1d ago</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.logoutButton}>
                    <Icon name="logout" size={24} color="#FFFFFF" />
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
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
        borderColor: '#E0E0E0',
        padding: 15
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingBottom: 15
    },
    profileImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
        marginRight: 15
    },
    profileImage: {
        width: '100%',
        height: '100%'
    },
    profileInfoContainer: {
        justifyContent: 'center'
    },
    profileName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 5
    },
    profileEmail: {
        fontSize: 14,
        color: '#666666'
    },
    settingsSection: {
        marginTop: 10,
        marginBottom: 20
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2'
    },
    settingIcon: {
        marginRight: 15
    },
    settingText: {
        flex: 1,
        fontSize: 16,
        color: '#000000'
    },
    chevronIcon: {
        opacity: 0.5
    },
    statsSection: {
        marginBottom: 20
    },
    statsSectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 10
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statItem: {
        alignItems: 'center',
        flex: 1
    },
    statValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000000'
    },
    statLabel: {
        fontSize: 12,
        color: '#666666'
    },
    activitySection: {
        marginBottom: 20
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2'
    },
    activityIcon: {
        marginRight: 15
    },
    activityText: {
        flex: 1,
        fontSize: 14,
        color: '#000000'
    },
    activityTime: {
        fontSize: 12,
        color: '#666666'
    },
    logoutButton: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10
    }
});

export default SettingProfile;