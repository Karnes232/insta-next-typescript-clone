import React from 'react'
import Moment from 'react-moment';

const Comment = ({ comment }: any) => {
  return (
    <div key={comment.id} className='flex items-center space-x-2 mb-3'>
        <img 
            className='h-7 rounded-full' 
            src={comment.data().userImage} 
            alt="" 
        />
        <p className='text-sm flex-1'>
            <span className='font-bold'>{comment.data().username}</span>{" "}
            {comment.data().comment}
        </p>
        <Moment fromNow className='pr-5 text-xs'>
            {comment.data().timestamp?.toDate()}
        </Moment>
    </div>
  )
}

export default Comment