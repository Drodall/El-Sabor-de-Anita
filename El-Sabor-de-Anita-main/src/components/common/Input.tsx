import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-dark mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2.5 text-base rounded-lg border transition-all duration-200 ${
          error
            ? 'border-danger focus:ring-2 focus:ring-danger focus:border-transparent'
            : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-danger mt-1 block">{error}</span>}
      {helperText && !error && (
        <span className="text-sm text-gray-500 mt-1 block">{helperText}</span>
      )}
    </div>
  )
}
