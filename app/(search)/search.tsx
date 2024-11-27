import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchSubmit = () => {
    router.push(`/result/${searchQuery}`);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{
              height: 50,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
            placeholderTextColor={"black"}
            onSubmitEditing={handleSearchSubmit} 
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;
