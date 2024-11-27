import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const PrivacyPage = () => {
  const privacyData = [
    {
      title: 'Information Collection',
      content: 'HD-News collects user information to improve app experience and provide personalized content.'
    },
    {
      title: 'Data Security',
      content: 'We are committed to protecting your personal information and will not share it with unauthorized third parties.'
    },
    {
      title: 'Privacy Rights',
      content: 'You can control and manage your personal information in the app settings section.'
    },
    {
      title: 'Privacy Rights',
      content: 'You can control and manage your personal information in the app settings section.'
    },
    {
      title: 'Privacy Rights',
      content: 'You can control and manage your personal information in the app settings section.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Privacy Policy</Text>
          <Text style={styles.appName}>HD-News</Text>
        </View>

        {privacyData.map((item, index) => (
          <View key={index} style={styles.privacyItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemContent}>{item.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollContainer: {
    padding: 20
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  appName: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20
  },
  privacyItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 4 
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8, // For Android
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)'
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  itemContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24
  }
});

export default PrivacyPage;