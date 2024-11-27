import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Drawer, Button } from 'react-native-paper';

type PaperDrawerProps = {
  isOpen: boolean; // Prop nhận true/false để mở Drawer
  toggleDrawer: () => void; // Hàm để đóng/mở Drawer
};

const PaperDrawer: React.FC<PaperDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const [active, setActive] = useState<string>('home');

  return (
    <>
      {/* Lớp phủ đằng sau Drawer */}
      {isOpen && (
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Drawer chính */}
      <View style={[styles.drawerContainer, isOpen ? styles.drawerOpen : styles.drawerClosed]}>
        <View style={{
          marginTop: 60
        }}>
            <Drawer.Section title="Menu">
            <Drawer.Item
              label="Home"
              active={active === 'home'}
              onPress={() => {
                setActive('home');
                toggleDrawer();
              }}
            />
            <Drawer.Item
              label="Profile"
              active={active === 'profile'}
              onPress={() => {
                setActive('profile');
                toggleDrawer();
              }}
            />
          </Drawer.Section>
          <Button onPress={toggleDrawer}>Close Drawer</Button>
          </View>
      </View>
    </>
  );
};

export default PaperDrawer;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen trong suốt
    zIndex: 9,
  },
  drawerContainer: {
    position: 'absolute',
    width: 250,
    height: '100%',
    backgroundColor: 'white',
    zIndex: 10,
    padding: 10,
    elevation: 4,
  },
  drawerOpen: {
    left: 0,
    zIndex:1001
  },
  drawerClosed: {
    left: -250, // Ẩn Drawer
  },
});
