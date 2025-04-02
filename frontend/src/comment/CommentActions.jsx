import React from 'react';
import { ThumbsUp, Reply, Trash2 } from 'lucide-react';

const CommentActions = ({ comment, onLike, onReply, onDelete, currentUser }) => {
  const canDelete = currentUser && currentUser.id === comment.userId;

  return (
    <div className="flex space-x-3 text-gray-500 text-sm">
      <button onClick={() => onLike(comment.id)} className="flex items-center hover:text-blue-600 transition-colors duration-200 group">
        <ThumbsUp size={16} className="mr-1 group-hover:text-blue-500 transition-colors duration-200" />
        {comment.likes}
      </button>
      <button onClick={() => onReply(comment)} className="flex items-center hover:text-green-600 transition-colors duration-200 group">
        <Reply size={16} className="mr-1 group-hover:text-green-500 transition-colors duration-200" />
        Reply
      </button>
      {canDelete && (
        <button onClick={() => onDelete(comment.id)} className="flex items-center hover:text-red-600 transition-colors duration-200 group">
          <Trash2 size={16} className="mr-1 group-hover:text-red-500 transition-colors duration-200" />
          Delete
        </button>
      )}
    </div>
  );
};

export default CommentActions;
