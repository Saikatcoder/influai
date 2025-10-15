import { FileText, LayoutDashboard, PenTool, Users } from "lucide-react";
import React from "react";


const sidebarItems = [
    {
        title: "Dashboard",
        herf: "/dashboard",
        icon:LayoutDashboard,
    },
    {
        title:"Create Post",
        href:"/dashboard/create",
        icon:PenTool,
    },
    {
        title:"My Posts",
        href:"/dashboard/posts",
        icon:FileText,
    },
    {
        title:"Followers",
        href:"/dashboard/followers",
        icon:Users,
    }
]
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {children}
    </div>
  );
}
