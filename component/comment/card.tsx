import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Heart, Trash2 } from 'lucide-react-native';
import { Modal, Portal, Button } from 'react-native-paper';

const CommentCard = ({ 
  user = {
    id: '1',
    name: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=000&color=fff'
  },
  comment = {
    id: '1',
    text: 'This is a sample comment that shows how the comment card looks.',
    publishDate: new Date().toISOString(),
    likes: 12
  },
  onDelete,
  onLike
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  // Format date to relative time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    
    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 60) return `${minutes}m`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    
    const days = Math.floor(hours / 24);
    return `${days}d`;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike && onLike(comment.id, !isLiked);
  };

  const confirmDelete = () => {
    onDelete && onDelete(comment.id);
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Delete Confirmation Modal */}
      <Portal>
        <Modal 
          visible={deleteModalVisible}
          onDismiss={() => setDeleteModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete Comment</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this comment?
            </Text>
            <View style={styles.modalButtonContainer}>
              <Button 
                mode="outlined"
                onPress={() => setDeleteModalVisible(false)}
                style={styles.modalCancelButton}
              >
                Cancel
              </Button>
              <Button 
                mode="contained" 
                onPress={confirmDelete}
                style={styles.modalDeleteButton}
                buttonColor="#000"
              >
                Delete
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>

      {/* User Avatar */}
      <Image 
        source={{ uri: user.avatar }} 
        style={styles.avatar} 
      />
      
      {/* Comment Content */}
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.publishDate}>
            {formatDate(comment.publishDate)}
          </Text>
        </View>
        
        <Text style={styles.commentText}>
          {comment.text}
        </Text>
        
        {/* Interaction Area */}
        <View style={styles.interactionContainer}>
          {/* Like Button */}
          <TouchableOpacity 
            style={styles.likeButton} 
            onPress={handleLike}
          >
            <Heart 
              color={isLiked ? 'red' : 'black'} 
              fill={isLiked ? 'red' : 'transparent'}
              size={20} 
            />
            <Text style={styles.likeCount}>
              {isLiked ? comment.likes + 1 : comment.likes}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Delete Button */}
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => setDeleteModalVisible(true)}
      >
        <Trash2 color="black" size={16} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'flex-start',
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    fontWeight: 'bold',
    color: 'black',
  },
  publishDate: {
    color: '#888',
    fontSize: 12,
  },
  commentText: {
    color: 'black',
    marginBottom: 10,
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: 'black',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  // Modal Styles (unchanged)
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalCancelButton: {
    flex: 1,
    marginRight: 10,
  },
  modalDeleteButton: {
    flex: 1,
  },
});

export default CommentCard;