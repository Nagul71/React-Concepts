import React from 'react';
import UserAvatar from './UserAvatar';
import CommentActions from './CommentActions';

const CommentItem = ({ comment, currentUser, onLike, onReply, onDelete, depth = 0 }) => {
  return (
    <div 
      className={`flex space-x-4 p-4 rounded-lg transition-all duration-300 
      ${depth > 0 ? 'ml-10 border-l-4 border-blue-100 bg-gray-50' : 'border-b border-gray-100'} 
      hover:bg-gray-50/50 hover:shadow-sm`}
    >
      <UserAvatar user={comment.user} />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <div className="font-semibold text-gray-800">{comment.user.username}</div>
          <span className="text-gray-500 text-xs">{new Date(comment.createdAt).toLocaleString()}</span>
        </div>
        <p className="mb-2 text-gray-700 leading-relaxed flex space-y-6">{comment.content}</p>
        <CommentActions 
          comment={comment}
          currentUser={currentUser}
          onLike={onLike}
          onReply={onReply}
          onDelete={onDelete}
        />
        {comment.replies && comment.replies.map(reply => (
          <CommentItem
            key={reply.id}
            comment={reply}
            currentUser={currentUser}
            onLike={onLike}
            onReply={onReply}
            onDelete={onDelete}
            depth={depth + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentItem;
