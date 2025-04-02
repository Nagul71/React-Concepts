import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Sidebar from './Sidebar';
function Card() {
    const user = {
        name: "Nagul K",
        image: "https://avatars.githubusercontent.com/u/118661118?v=4",
        email: "nagulkannaaa@gmail.com",
        role: "Full Stack Developer",
        idNumber: "212222230089",
        contact: "8428019384",
        about: "A passionate AI enthusiast and web developer, adept at building dynamic websites using modern web technologies and machine learning solutions",
        socialLinks: {
            linkedin: "#",
            twitter: "#",
            instagram: "#",
            github: "https://github.com/Nagul71"
        }
    }
  
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-200 p-4">
            <div className="w-96 bg-white rounded-3xl shadow-4xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out hover:shadow-4xl">
                {/* Header with gradient background */}
                <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-400 relative">
                    {/* Centered profile image */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="w-32 h-32 rounded-full border-6 border-white shadow-2xl overflow-hidden">
                            <img 
                                src={user.image} 
                                alt={`${user.name}'s profile`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="pt-20 px-6 pb-8 text-center">
                    {/* Name */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">{user.name}</h2>
                    
                    {/* Professional Details */}
                    <div className="space-y-2 mb-4 text-left px-4">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-24">Role:</span>
                            <span className="text-l font-medium text-gray-600">{user.role}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-24">Email:</span>
                            <span className="text- font-medium text-gray-600">{user.email}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-24">ID Number:</span>
                            <span className="text-l font-medium text-gray-600">{user.idNumber}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 w-24">Contact:</span>
                            <span className="text-l font-medium text-gray-600">{user.contact}</span>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-4 text-left px-4">
                        <h3 className="font-semibold text-gray-700 mb-2 ">About:</h3>
                        <p className="text-l font-mono text-gray-600">{user.about}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mt-6 mb-8">
                        <a href={user.socialLinks.linkedin} className="text-blue-500 hover:text-blue-700 transition-colors">
                            <IoLogoLinkedin className='w-6 h-6'/>
                        </a>
                        <a href={user.socialLinks.twitter} className="text-black-500 hover:text-gray-700 transition-colors">
                            <BsTwitterX className='w-6 h-6' />
                        </a>
                        <a href={user.socialLinks.github} className="text-black-500 hover:text-gray-700 transition-colors">
                            <FaGithub className='w-6 h-6' />
                        </a>
                    </div>

                    {/* Connect Button */}
                    <div>
                        <a href='https://www.linkedin.com/in/nagul-k/' target='_blank'>
                        <button className='bg-blue-600 text-white w-full rounded-2xl h-10 text-xl hover:bg-blue-800'>
                            <div className='mb-1'>Let's Connect</div>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;