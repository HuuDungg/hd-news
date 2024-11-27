import React, { useState, useRef } from 'react';
import { 
  Dimensions, 
  ImageBackground,
  Text, 
  View, 
  StyleSheet 
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const HomeCarousel = () => {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const carouselData = [
    {
      image: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
      title: 'Venom Unleashed',
      description: 'Epic Marvel Showdown'
    },
    {
      image: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
      title: 'Symbiote Saga',
      description: 'Dark Superhero Adventure'
    },
    {
      image: 'https://platform.polygon.com/wp-content/uploads/sites/2/2024/10/VenomGrin2.jpg?quality=90&strip=all&crop=18.725%2C0%2C62.55%2C100&w=2048',
      title: 'Marvel Legends',
      description: 'Incredible Battle'
    }
  ];

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <View 
            key={index} 
            style={[
              styles.dot, 
              index === activeIndex ? styles.activeDot : styles.inactiveDot
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          loop={true}
          autoPlay={true}
          width={ width}
          height={width / 2}
          data={carouselData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item, index }) => (
            <ImageBackground
              source={{ uri: item.image }}
              style={styles.carouselItem}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.gradient}
                pointerEvents="none"
              >
                <BlurView 
                  intensity={20} 
                  style={styles.blurContainer}
                  pointerEvents="none"
                >
                  <Text style={styles.titleText} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.descriptionText} numberOfLines={1}>
                    {item.description}
                  </Text>
                </BlurView>
              </LinearGradient>
            </ImageBackground>
          )}
        />
        {renderDots()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: '#121212',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 4 
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  carouselItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  gradient: {
    height: '50%',
    justifyContent: 'flex-end',
  },
  blurContainer: {
    padding: 12,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 40,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  descriptionText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  activeDot: {
    width: 12,
    backgroundColor: 'white',
  },
  inactiveDot: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});

export default HomeCarousel;