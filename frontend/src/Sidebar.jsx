import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  User,
  Calendar,
  Settings,
  Table,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Layers,
  MessageCircleCode,
  Sparkles,
  Receipt,
  ReceiptIcon,
  ReceiptText
} from "lucide-react";

const Sidebar = ({ userName = "Nagul" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Profile", href: "/", icon: User },
    { name: "UseEffect", href: "/useEffect", icon: Sparkles },
    { name: "UseContext", href: "/useContext", icon: ReceiptText },
    { name: "NestedComments-Props", href: "/nestedprops", icon: MessageCircleCode },
    { name: "Router-Table", href: "/Router", icon: Table },
    { name: "ALL IN ONE", href: "/allinone", icon: Layers },
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="p-2 rounded-md bg-blue-600 text-white shadow-md"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } transition-all duration-300 ease-in-out h-screen bg-white border-r border-gray-200 shadow-lg fixed top-0 left-0 z-40 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className={`flex items-center justify-between p-4 ${isCollapsed ? "justify-center" : ""}`}>
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {userName.split(" ").map(name => name[0]).join("")}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800">{userName}</span>
                  <span className="text-xs text-gray-500">Student</span>
                </div>
              </div>
            )}
            
            {isCollapsed && (
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {userName.split(" ").map(name => name[0]).join("")}
              </div>
            )}
            
            <button
              onClick={toggleSidebar}
              className="lg:block hidden p-1 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} className={`transform transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActiveLink(item.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                } group flex items-center px-3 py-3 rounded-lg transition-colors ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                <item.icon
                  className={`h-6 w-6 ${
                    isActiveLink(item.href) ? "text-blue-600" : "text-gray-500 group-hover:text-gray-600"
                  }`}
                  aria-hidden="true"
                />
                {!isCollapsed && (
                  <span className="ml-3 text-sm font-medium">{item.name}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="flex items-center px-3 py-3 text-sm font-medium text-blue-600 rounded-lg hover:bg-blue-50 group transition-colors">
              {!isCollapsed && <span className="ml-3">All Rights Reserved @2025</span>}
          </div>
        </div>
      </aside>  

      {/* Content Wrapper - use this to offset your main content */}
      <div className={`${isCollapsed ? "lg:ml-20" : "lg:ml-64"} transition-all duration-300 ease-in-out`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;