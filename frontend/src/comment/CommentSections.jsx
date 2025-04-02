import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import CommentForm from "./CommentForm";
import SortOptions from "./SortOptions";
import CommentItem from "./CommentItem";

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [sortOption, setSortOption] = useState('newest');
    const [replyingTo, setReplyingTo] = useState(null);
  
    // Simulated current user (in a real app, this would come from authentication)
    useEffect(() => {
      setCurrentUser({
        id: '1',
        username: 'Unknown User',
        avatar: null
      });
  
      // Simulated initial comments
      setComments([
        {
          id: '1',
          userId: '1',
          user: { 
            id: '1', 
            username: 'JohnDoe', 
            avatar: null 
          },
          content: 'This is the first comment!',
          createdAt: new Date().toISOString(),
          likes: 5,
          replies: [
            {
              id: '2',
              userId: '1',
              user: { 
                id: '1', 
                username: 'Unknown User', 
                avatar: null 
              },
              content: 'This is a reply to the first comment',
              createdAt: new Date().toISOString(),
              likes: 2,
              replies: []
            }
          ]
        }
      ]);
    }, []);
  
    // Comment submission handler
    const handleCommentSubmit = (newComment) => {
      const commentToAdd = {
        id: String(Date.now()),
        userId: currentUser.id,
        user: currentUser,
        content: newComment.content,
        createdAt: new Date().toISOString(),
        likes: 0,
        replies: []
      };
  
      if (newComment.parentCommentId) {
        // Add as a reply
        setComments(prevComments => 
          prevComments.map(comment => {
            if (comment.id === newComment.parentCommentId) {
              return {
                ...comment,
                replies: [...(comment.replies || []), commentToAdd]
              };
            }
            return comment;
          })
        );
        setReplyingTo(null);
      } else {
        // Add as a top-level comment
        setComments(prev => [commentToAdd, ...prev]);
      }
    };
  
    // Like handler
    const handleLike = (commentId) => {
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === commentId) {
            return { ...comment, likes: (comment.likes || 0) + 1 };
          }
          // Check nested replies
          if (comment.replies) {
            return {
              ...comment,
              replies: comment.replies.map(reply => 
                reply.id === commentId 
                  ? { ...reply, likes: (reply.likes || 0) + 1 }
                  : reply
              )
            };
          }
          return comment;
        })
      );
    };
  
    // Delete handler
    const handleDelete = (commentId) => {
      setComments(prevComments => 
        prevComments.filter(comment => comment.id !== commentId)
          .map(comment => ({
            ...comment,
            replies: comment.replies 
              ? comment.replies.filter(reply => reply.id !== commentId)
              : []
          }))
      );
    };
  
    // Reply handler
    const handleReply = (comment) => {
      setReplyingTo(comment);
    };
  
    // Sorting logic
    const sortedComments = [...comments].sort((a, b) => {
      switch(sortOption) {
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'mostLiked':
          return (b.likes || 0) - (a.likes || 0);
        default: // newest
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
  
    return (
        <div className="p-20">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl border-y-zinc-600 border-1">
        <div className="flex items-center mb-6 border-b pb-3 border-gray-200">
          <MessageCircle className="mr-3 text-blue-500 w-7 h-7" />
          <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
        </div>
  
        {/* Comment Input Form */}
        <CommentForm 
          onSubmit={handleCommentSubmit}
          currentUser={currentUser}
        />
  
        {/* Sort Options */}
        <SortOptions 
          currentSort={sortOption}
          onSortChange={setSortOption}
        />
  
        {/* Comments List */}
        <div className="space-y-4">
          {sortedComments.map(comment => (
            <React.Fragment key={comment.id}>
              <CommentItem 
                comment={comment}
                currentUser={currentUser}
                onLike={handleLike}
                onReply={handleReply}
                onDelete={handleDelete}
              />
              {replyingTo && replyingTo.id === comment.id && (
                <CommentForm 
                  onSubmit={handleCommentSubmit}
                  parentCommentId={comment.id}
                  placeholder={`Replying to ${replyingTo.user.username}`}
                  currentUser={currentUser}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  export default CommentSection;