'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative z-20 border-b border-gray-800 bg-black bg-opacity-70 backdrop-blur">
      <section className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <section className="flex items-center flex-shrink-0">
          <span className="text-xl sm:text-2xl font-bold ml-2 text-white">ChatShot</span>
          <span className="text-xs bg-white text-black px-2 py-0.5 rounded ml-2">BETA</span>
        </section>

        <button
          className="block sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <section
          className={`w-full sm:w-auto mt-4 sm:mt-0 ${
            menuOpen ? 'block' : 'hidden'
          } sm:flex`}
        >
          <Link
            href="/chatbot"
            className="group flex cursor-pointer items-center justify-center gap-2 px-6 py-2 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </section>
    </nav>
  )
}

export default Navbar
