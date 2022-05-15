import React, { useEffect, useState } from 'react'

import { useSession } from 'next-auth/react';
import { db } from '../../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';


import Comment from './PostComponents/Comment';
import Header from './PostComponents/Header';
import InputBox from './PostComponents/InputBox';
import Buttons from './PostComponents/Buttons';
import Caption from './PostComponents/Caption';
import Image from 'next/image';

interface Props {
  id: string,
  img: string,
  username: string,
  userImg: string,
  caption: string
}


const Post = ({ id, username, userImg, img, caption }: Props) => {
  const { data: session } = useSession()
  const [comments, setComments] = useState([]);

  useEffect(() => {
    return onSnapshot(query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')), (snapshot: any) => {
      setComments(snapshot.docs)
    })
  }, [db, id])
 
  return (
    <div className='bg-white my-7 border rounded-sm'>
      <Header username={username} userImg={userImg} />

      <Image 
        src={img}
        height={430.88}
        width={766}
        className='object-cover  w-full'
      />

      {session && (
        <Buttons id={id}/>
      )}
      

      <Caption username={username} caption={caption} id={id} />

      {
        comments.length > 0 && (
          <div className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
            {comments.map((comment: any) => (
              <Comment comment={comment} />
            ))}
          </div>
        )
      }

      {session && (
        <InputBox id={id} />
      )}
      
    </div>
  )
}

export default Post