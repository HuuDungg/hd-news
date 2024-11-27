import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, Mail, User, ChevronRight } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAuth = () => {
    // Authentication logic would be implemented here
    console.log(isLogin ? 'Login' : 'Register', { email, password, username });
    router.replace("/(tabs)/home");
  };

  const handleSocialLogin = (platform) => {
    // Social login logic
    console.log(`Login with ${platform}`);
  };

  return (
    <LinearGradient 
      colors={['#4A90E2', '#FFFFFF', '#000000']} 
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}
    >
      <KeyboardAwareScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerSpace} />
        
        <View style={[
          styles.authContainer, 
          !isLogin ? styles.expandedContainer : null
        ]}>
          <Text style={styles.title}>HD-News</Text>
          
          {/* Tab Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[
                styles.tab, 
                isLogin ? styles.activeTab : styles.inactiveTab
              ]}
              onPress={() => setIsLogin(true)}
            >
              <Text style={[
                styles.tabText, 
                isLogin ? styles.activeTabText : styles.inactiveTabText
              ]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.tab, 
                !isLogin ? styles.activeTab : styles.inactiveTab
              ]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={[
                styles.tabText, 
                !isLogin ? styles.activeTabText : styles.inactiveTabText
              ]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {!isLogin && (
              <View style={styles.inputWrapper}>
                <User color="black" size={20} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#888"
                  value={username}
                  onChangeText={setUsername}
                />
              </View>
            )}

            <View style={styles.inputWrapper}>
              <Mail color="black" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#888"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Lock color="black" size={20} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {!isLogin && (
              <View style={styles.inputWrapper}>
                <Lock color="black" size={20} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#888"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            )}
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={handleAuth}
          >
            <Text style={styles.actionButtonText}>
              {isLogin ? 'Login' : 'Create Account'}
            </Text>
            <ChevronRight color="white" size={20} />
          </TouchableOpacity>

          {/* Forgot Password */}
          {isLogin && (
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          )}

          {/* Social Login */}
            <View style={styles.socialLoginContainer}>
              <Text style={styles.socialLoginText}>Or login with</Text>
              <View style={styles.socialIconsContainer}>
                <TouchableOpacity 
                  style={styles.socialIcon}
                  onPress={() => handleSocialLogin('Google')}
                >
                  <Ionicons name="logo-google" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.socialIcon}
                  onPress={() => handleSocialLogin('Facebook')}
                >
                  <Ionicons name="logo-facebook" size={24} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.socialIcon}
                  onPress={() => handleSocialLogin('Apple')}
                >
                  <Ionicons name="logo-apple" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  headerSpace: {
    height: height * 0.2, // Increased to 20% of screen height
  },
  authContainer: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  expandedContainer: {
    height: height * 0.7, // Expanded height for register form
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: 'black',
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabText: {
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    height: 50,
  },
  actionButton: {
    width: '100%',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  forgotPassword: {
    color: 'black',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  socialLoginContainer: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  socialLoginText: {
    color: '#888',
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});