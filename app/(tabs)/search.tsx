import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export default function GalleryFromDevice() {
  const [media, setMedia] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      if (status === 'granted') {
        const mediaData = await MediaLibrary.getAssetsAsync({
          mediaType: ['photo', 'video'], // Fetch both photos and videos
          first: 100, // Fetch first 100 media
          sortBy: [['creationTime', false]], // Newest first
        });
        setMedia(mediaData.assets);
      }
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to media library</Text>;
  }

  const renderItem = ({ item }) => {
    if (item.mediaType === 'photo') {
      return <Image source={{ uri: item.uri }} style={styles.image} />;
    } else if (item.mediaType === 'video') {
      return (
        <TouchableOpacity style={styles.video}>
          <Text>▶️ Video</Text> {/* You can replace with video player component */}
        </TouchableOpacity>
      );
    }
  };

  return (
    <FlatList
      data={media}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '33%',
    aspectRatio: 1,
    margin: 1,
  },
  video: {
    width: '33%',
    aspectRatio: 1,
    margin: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});