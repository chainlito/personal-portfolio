import React, { useState } from "react";
import Typist from 'react-typist-component';

interface NavButtonProps {
  icon: any,
  label: string
}

export function NavButton({ icon, label }: NavButtonProps) {
  const [entered, setEntered] = useState(false);
  
  return (
    <button
      type="button"
      className="flex my-4 h-12 p-3 text-white bg-gray-800 hover:bg-blue-400 rounded-full transition-colors duration-700 transform font-bold"
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
    >
      {icon}
      {entered ? (
          <Typist>
            <span className="px-3">{label}</span>
          </Typist>
        ) : null}
    </button>
  )
}
