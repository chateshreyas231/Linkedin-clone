import {Text, View, StyleSheet, Image} from 'react-native';
import { Post } from '../types';
type PostListTiemProps = {
    post: Post;
}

export default function PostListItem({post}: PostListTiemProps){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri:post.author.image}} style = {styles.userImage}/>
                    <View>
                        <Text style={styles.userName}>{post.author.name}</Text>
                        <Text>{post.author.position}</Text>
                    </View>
            </View>
            <Text style={styles.content}>{post.content}</Text>
            {post.image && (
            <Image source={{uri: post.image}} style={styles.postImage}/>
            )}
            <Text>Footer</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: 'white'
    },
    header:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 10,
    },
    userName:{
        fontWeight:'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    userImage:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    content:{
        margin: 10,
        marginTop: 0,
    },
    postImage:{
        width: '100%',
        aspectRatio: 1,
    },
});