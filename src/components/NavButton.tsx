import React, { useState } from "react";

interface NavButtonProps {
  icon: any
}

export function NavButton({icon}: NavButtonProps) {
  const [entered, setEntered] = useState(false);
  
  return (
    <button
      type="button"
      className="flex my-4 h-12 p-3 text-white bg-gray-800 hover:bg-blue-400 rounded-full transition-colors duration-700 transform"
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
    >
      {entered ? <span>Home</span> : null}
      {icon}
    </button>
  )
}
