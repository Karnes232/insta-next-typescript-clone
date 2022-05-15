import React, { useEffect, useState } from 'react'
import { BookmarkIcon, ChatIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSession } from 'next-auth/react';


const Buttons = ({ id }) => {
  const { data: session } = useSession()
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)


  useEffect(() => {
    return onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
      setLikes(snapshot.docs)
    })
  }, [db, id])

  useEffect(() => {
    setHasLiked(likes.findIndex(like => like.id === session?.user?.uid) !== -1)
    
  }, [likes])

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
    
  }
  
  return (
    <div className='flex justify-between pt-4 px-4'>
        <div className='flex space-x-4'>
          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className='btn text-red-500'/>
          ):(
            <HeartIcon onClick={likePost} className='btn'/>
          )}
          
          <ChatIcon className='btn'/>
          <PaperAirplaneIcon className='btn'/>
        </div>
        <BookmarkIcon className='btn'/>
      </div>
  )
}

export default Buttons