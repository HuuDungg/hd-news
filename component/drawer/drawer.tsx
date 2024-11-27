import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { Button, Divider, Text, TouchableRipple } from 'react-native-paper';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999
  },
  drawerContainer: {
    position: 'absolute',
    width: 250,
    height: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 1000,
    shadowColor: '#000000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5
  },
  drawerHeader: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'flex-end',
    marginTop: 40
  },
  closeButton: {
    padding: 10
  },
  menuContainer: {
    paddingTop: 20
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 12
  },
  activeMenuItem: {
    backgroundColor: '#000000'
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  menuItemText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500'
  },
  activeMenuItemText: {
    color: '#FFFFFF'
  }
});

type PaperDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const PaperDrawer: React.FC<PaperDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const [active, setActive] = useState('home');
  const drawerAnimation = useSharedValue(-width);

  const animatedDrawerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(drawerAnimation.value, {
        duration: 300,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1)
      }) }]
    };
  });

  React.useEffect(() => {
    drawerAnimation.value = isOpen ? 0 : -width;
  }, [isOpen]);

  const MenuItem = ({ 
    icon, 
    title, 
    route 
  }: { 
    icon: string, 
    title: string, 
    route: string 
  }) => (
    <>
      <TouchableRipple
        onPress={() => {
          toggleDrawer();
          router.navigate(route as any)
        }}
        rippleColor="rgba(0, 0, 0, 0.1)"
        style={[
          styles.menuItem, 
          active === route && styles.activeMenuItem
        ]}
      >
        <View style={styles.menuItemContent}>
          <Icon 
            name={icon}
            color={active === route ? '#FFFFFF' : '#000000'} 
            size={24} 
          />
          <Text 
            style={[
              styles.menuItemText, 
              active === route && styles.activeMenuItemText
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableRipple>
      <Divider />
    </>
  );

  return (
    <>
      {isOpen && (
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      
      <Animated.View 
        style={[
          styles.drawerContainer, 
          animatedDrawerStyle
        ]}
      >
        <SafeAreaView>
            <View style={styles.drawerHeader}>
            <TouchableRipple 
              onPress={toggleDrawer} 
              style={styles.closeButton}
              rippleColor="rgba(0, 0, 0, 0.1)"
            >
              <Icon name="x" color="#000000" size={24} />
            </TouchableRipple>
          </View>

          <View style={styles.menuContainer}>
            <MenuItem 
              icon="home" 
              title="Home" 
              route="/(tabs)/home" 
            />
            <MenuItem 
              icon="slack" 
              title="Short" 
              route="/(tabs)/short" 
            />
            <MenuItem 
              icon="feather" 
              title="Notice" 
              route="/(tabs)/notice" 
            />
            <MenuItem 
              icon="settings" 
              title="Setting" 
              route="/(tabs)/setting" 
            />
          </View>
          <View
          style={{
            margin: 20
          }}
          >
            <Button 
            buttonColor='black'
            style={{ 
              borderRadius: 10,
            }} 
            labelStyle={{ 
              color: 'white' 
            }}
            icon="logout" 
            mode="contained" 
            onPress={() => {
              router.replace("/");
            }}
          >
            Logout
          </Button>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default PaperDrawer;