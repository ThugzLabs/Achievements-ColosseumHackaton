"use client"

import { useState } from "react"

export default function PlayerDNACard() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-auto bg-gray-900">
      <div
        className="relative w-full max-w-md bg-black border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-50" />

        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 text-center">
          <h1 className="text-4xl font-bold tracking-wider text-cyan-400 flex items-center justify-center">
            PLAYER DNA
            <span className="ml-2 text-cyan-400">≡</span>
          </h1>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center -mt-2">
          <div
            className={`relative rounded-full w-32 h-32 border-2 ${hovered ? "border-purple-500" : "border-cyan-400"} p-1 transition-all duration-300`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 animate-pulse" />
            <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Player Avatar" 
                className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-cyan-400 tracking-wide">THE LORE GLADIATOR</h2>
          <p className="text-purple-400 text-lg tracking-widest mt-1">C-S-C-B</p>
        </div>

        {/* Description */}
        <div className="bg-gray-900/80 mx-4 my-4 p-4 rounded-md border border-cyan-900/50">
          <h3 className="text-cyan-400 text-sm tracking-wider mb-2">DESCRIPTION</h3>
          <p className="text-gray-300 text-sm">
            You're a fearless champ on the battlefield, but also seek out games with rich worlds and stories. You love
            achieving hard-earned victories and piecing together lore like a puzzle.
          </p>
        </div>

      </div>
    </div>
  )
}
