import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import Post from './Post'

const PostWorkAround = Post as unknown as React.JSXElementConstructor<{
    id: string,
    img: string,
    username: string,
    userImg: string,
    caption: string

}>;

const Posts = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot: any) => {
          
      setPosts(snapshot.docs);
    }) 
  }, [db])
  
  
  return (
    <div>
        {posts.map((post: any) => (
            <PostWorkAround 
              key={post.id} 
              id={post.id} 
              username={post.data().username} 
              userImg={post.data().profileImg} 
              img={post.data().image}  
              caption={post.data().caption}
            />
        ))}
        
        
    </div>
  )
}

export default Posts