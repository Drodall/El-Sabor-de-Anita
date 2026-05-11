import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-orange-50 border border-orange-100 rounded-lg shadow-sm p-6 transition-all duration-200 ${
        hover ? 'hover:bg-orange-100 hover:shadow-lg hover:scale-105' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
