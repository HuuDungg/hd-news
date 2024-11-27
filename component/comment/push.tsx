import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform, 
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Send } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {}

const PushComment = () => {
  const [comment, setComment] = useState('');
  const insets = useSafeAreaInsets();

  const handleSubmitComment = () => {
    if (comment.trim()) {
      setComment(''); // Clear input after submission
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { paddingBottom: insets.bottom + 10 }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 110 : 20}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            placeholderTextColor="#888"
            value={comment}
            onChangeText={setComment}
            multiline={true}
            maxLength={500}
            returnKeyType="done"
            blurOnSubmit={true}
          />
          <TouchableOpacity 
            style={styles.sendButton}
            onPress={handleSubmitComment}
            disabled={!comment.trim()}
          >
            <Send 
              color={comment.trim() ? '#000' : '#888'} 
              size={24} 
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 30,
    // Shadow styles for iOS
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    
    // Elevation for Android
    elevation: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 5 : 5,
    width: '90%',
    // Giảm chiều cao động cho wrapper
    height: 50, // Cố định chiều cao để giảm sự giật giật
  },
  input: {
    flex: 1,
    maxHeight: 100,
    minHeight: 40,
    color: '#000',
    fontSize: 16,
    textAlignVertical: 'top',
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PushComment;
