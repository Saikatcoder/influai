"use client"
import React, { useEffect, useState } from 'react'

const CustomMouse = () => {
      const [mousePosition, setMousePosition] = useState({x:0, y:0});

  useEffect(()=>{
    const handleMouseMove = (e) =>{
      setMousePosition({x: e.clientX, y: e.clientY});
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  },[])
  return (
    <div>
      <div style={{left: mousePosition.x - 200, top: mousePosition.y - 200}} className = "fixed w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 rounded-full blur-3xl pointer-events-none z-0 ">
      </div>
    </div>
  )
}

export default CustomMouse
