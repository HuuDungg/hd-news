import React from "react";
import PushComment from "@/component/comment/push";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CommentCard from "@/component/comment/card";

const CommentPage = () => {
  return (
    <View style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View
                style={{
                    marginHorizontal: 10,
                    gap: 10
                }}
            >
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </View>
      </ScrollView>
      
      <PushComment />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',  
  },
  scrollContainer: {
    paddingBottom: 80, // Make room for the sticky footer
  },
  pageText: {
    fontSize: 20,
    margin: 20,
  },
});

export default CommentPage;
