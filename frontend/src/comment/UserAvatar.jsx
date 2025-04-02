import React from 'react';
import { User } from 'lucide-react';

const UserAvatar = ({ user, size = 40 }) => {
  return (
    <div className="flex items-center">
      {user.avatar ? (
        <img 
          src={user.avatar} 
          alt={`${user.username}'s avatar`} 
          className="rounded-full object-cover shadow-md transition-transform duration-200 hover:scale-105" 
          style={{ width: size, height: size }}
        />
      ) : (
        <div 
          className="bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center text-gray-700 shadow-md"
          style={{ width: size, height: size }}
        >
          <User size={size * 0.6} />
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
