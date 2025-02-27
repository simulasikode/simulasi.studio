// src/components/ui/inputText.tsx
"use client";
import React, { InputHTMLAttributes } from "react";

// Define the props interface for the InputText component
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label prop
  error?: string; // Optional error message prop
}

const InputText: React.FC<InputTextProps> = ({
  id,
  label,
  error,
  type = "text", // Default type to 'text'
  ...props // Spread other props (value, onChange, placeholder, etc.)
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-white text-sm font-bold mb-2" // Tailwind classes for label
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`
          appearance-none
          bg-[#202020]
          border-b
                    py-2
          px-3
          leading-tight
          focus:outline-none
          w-full
          text-white // Text color for input text
        `} // Tailwind classes for input, using template literals for conditional border
        {...props} // Spread all other props (value, onChange, placeholder, etc.)
      />
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};

export default InputText;
