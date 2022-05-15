import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase'



const Caption = ({ id, username, caption }) => {
  const [likes, setLikes] = useState([])
  useEffect(() => {
    return onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => {
      setLikes(snapshot.docs)
    })
  }, [db, id])
  return (
    <div>
        <p className="p-5 truncate">
          {likes.length > 0 && (
            <p className='font-bold mb-1'>{likes.length} likes</p>
          )}
          <span className='font-bold mr-1'>{username} </span>
          {caption}
        </p>
    </div>
  )
}

export default Caption