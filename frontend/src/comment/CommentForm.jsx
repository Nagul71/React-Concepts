import React, { useState } from 'react';
import UserAvatar from './UserAvatar';

const CommentForm = ({ onSubmit, parentCommentId = null, placeholder = "Write a comment...", currentUser }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onSubmit({ content, parentCommentId });
    setContent('');
  };

  if (!currentUser) {
    return (
      <div className="text-gray-600 p-4 bg-blue-50 rounded-lg border border-blue-100 text-center">
        Please log in to leave a comment
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-100">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 resize-y"
        rows={3}
      />
      <div className="flex justify-between items-center mt-3">
        <UserAvatar user={currentUser} size={30} />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          {parentCommentId ? 'Reply' : 'Comment'}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
