import { router } from 'expo-router';
import React from 'react';
import { Text, View, TouchableOpacity, Platform } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <>
        <View 
            style={{
                paddingTop: Platform.OS === 'ios' ? 40 : 20, // Safe area adjustment
                paddingBottom: 10,
                paddingHorizontal: 15,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
        >
            <View 
                style={{
                    width: "100%",
                    height: 45,
                    backgroundColor: "#fff", 
                    borderRadius: 20, // Rounded corners
                    alignItems: "center",
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                    shadowColor: "#000",
                    shadowOffset: { 
                        width: 0, 
                        height: 4 
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 8, // Enhanced shadow for Android
                }}
            >
                {/* Left Side - Menu or Back Button */}
                <TouchableOpacity
                    style={{
                        width: "15%",
                        alignItems: 'flex-start',
                    }}
                >
                    <Icon 
                        name="menuunfold" 
                        size={24} 
                        color="#000" 
                    />
                </TouchableOpacity>

                {/* Center - Title */}
                <View 
                    style={{
                        width: "70%",
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: "#000"
                        }}
                    >
                        Home
                    </Text>
                </View>

                {/* Right Side - Action Icons */}
                <View
                    style={{
                        width: "15%",
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity 
                        style={{ 
                            marginLeft: 15 
                        }}
                    >
                        <Icon 
                            name="smileo" 
                            size={22} 
                            color="#000" 
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{ 
                            marginLeft: 15 
                        }}
                        onPress={()=>{
                            router.push("/(search)/search")
                        }}
                    >
                        <Icon 
                            name="search1" 
                            size={22} 
                            color="#000" 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </>
    );
};

export default Header;