import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { Facebook, Github, Twitter, Mail, Phone } from 'lucide-react-native';

const AboutPage = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/112086195?v=4' }} 
            style={styles.profileImage}
          />
          <Text style={styles.name}>Tran Huu Dung</Text>
          <Text style={styles.role}>Fullstack Developer</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Birth Date:</Text>
            <Text style={styles.value}>03/08/2004</Text>
          </View>
          <View style={styles.infoItem}>
            <Phone color="#333" size={20} />
            <Text style={styles.valueWithIcon}>0986845301</Text>
          </View>
          <View style={styles.infoItem}>
            <Mail color="#333" size={20} />
            <Text style={styles.valueWithIcon}>huudung2004kt@gmail.com</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <Text style={styles.skillsList}>
            Python, Flask, NestJS, ReactJS, React Native, Next.js, 
            Java Spring Boot
          </Text>
        </View>

        <View style={styles.socialSection}>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => openLink('https://www.facebook.com/huudung.038')}
          >
            <Facebook color="#333" size={30} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => openLink('https://x.com/huudung038')}
          >
            <Twitter color="#333" size={30} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.socialIcon}
            onPress={() => openLink('https://github.com/huudungg')}
          >
            <Github color="#333" size={30} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Fair white background
    padding: 20
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#333',
  },
  name: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  role: {
    color: '#666',
    fontSize: 18,
  },
  infoSection: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    color: '#666',
    marginRight: 10,
    fontSize: 16,
  },
  value: {
    color: '#333',
    fontSize: 16,
  },
  valueWithIcon: {
    color: '#333',
    fontSize: 16,
    marginLeft: 10,
  },
  skillsList: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  socialIcon: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default AboutPage;