import React from 'react'

export const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
    </div>
  )
}

interface ErrorProps {
  message: string
  onDismiss?: () => void
}

export const ErrorMessage: React.FC<ErrorProps> = ({ message, onDismiss }) => {
  return (
    <div className="bg-danger/10 border border-danger text-danger px-4 py-3 rounded-lg flex items-center justify-between">
      <span>{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-danger hover:text-danger/80 transition"
        >
          ✕
        </button>
      )}
    </div>
  )
}

interface SuccessProps {
  message: string
  onDismiss?: () => void
}

export const SuccessMessage: React.FC<SuccessProps> = ({ message, onDismiss }) => {
  return (
    <div className="bg-success/10 border border-success text-success px-4 py-3 rounded-lg flex items-center justify-between">
      <span>{message}</span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-success hover:text-success/80 transition"
        >
          ✕
        </button>
      )}
    </div>
  )
}
