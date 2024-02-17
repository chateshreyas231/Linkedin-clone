import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import PostListItem from '../../components/PostListItem';
import posts from '../../../assets/data/posts.json';

const firstpost = posts[0];

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <PostListItem post={firstpost} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
