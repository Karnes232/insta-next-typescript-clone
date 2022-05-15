import { EmojiHappyIcon } from '@heroicons/react/outline'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { db } from '../../../firebase'


const InputBox = ({ id }) => {
  const { data: session } = useSession()
  const [comment, setComment] = useState("")

  const sendComment = async (e) => {
    e.preventDefault()
    const commentToSend = comment;
    setComment("")

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input 
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder='Add a comment...'
            type="text" 
            className='border-none flex-1 focus:ring-0 outline-none' 
        />
        <button 
          type='submit'
          disabled={!comment.trim()}
          onClick={sendComment}
          className='font-semibold text-blue-400'
        >
          Post
        </button>
    </form>
  )
}

export default InputBox