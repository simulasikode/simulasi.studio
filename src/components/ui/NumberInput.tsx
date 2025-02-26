// components/ui/NumberInput.tsx

import React, { useState, ChangeEvent, useCallback, useRef } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

interface NumberInputProps {
  label?: string;
  name: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  onBlur?: () => void;
  inputWidth?: string;
  helperText?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step = 1,
  placeholder,
  className = "",
  error,
  disabled,
  required,
  onBlur,
  inputWidth = "w-full",
  helperText,
}) => {
  const [inputValue, setInputValue] = useState(String(value));
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      const parsedValue = Number(newValue);

      //Handle the empty input first
      if (newValue === "") {
        onChange(NaN); // Notify parent component that value is empty / invalid
        return;
      }

      if (isNaN(parsedValue)) {
        return;
      }

      if (min !== undefined && parsedValue < min) {
        onChange(min);
        setInputValue(String(min));
        return;
      }

      if (max !== undefined && parsedValue > max) {
        onChange(max);
        setInputValue(String(max));
        return;
      }

      onChange(parsedValue);
    },
    [onChange, max, min],
  );

  const handleIncrement = useCallback(() => {
    let newValue = value + step;

    if (max !== undefined && newValue > max) {
      newValue = max;
    }

    onChange(newValue);
    setInputValue(String(newValue));
    inputRef.current?.focus();
  }, [onChange, max, step, value]);

  const handleDecrement = useCallback(() => {
    let newValue = value - step;

    if (min !== undefined && newValue < min) {
      newValue = min;
    }

    onChange(newValue);
    setInputValue(String(newValue));
    inputRef.current?.focus();
  }, [onChange, min, step, value]);

  const handleBlur = useCallback(() => {
    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative mt-1 bg-gray-800 border-b border-gray-300">
        {" "}
        {/* Added background color to container */}
        <input
          ref={inputRef}
          type="text"
          name={name}
          id={name}
          className={` ${inputWidth} bg-gray-800 py-2  focus:outline-none focus:border-blue-500 sm:text-sm ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          } ${disabled ? "bg-gray-800, cursor-not-allowed" : ""} pr-8 pl-2 text-left`} // Removed text-right, added pl-2
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          aria-invalid={error ? "true" : "false"}
        />
        <div className="absolute inset-y-0 right-2 flex items-center">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={disabled}
            aria-label="Decrement"
            className="bg-transparent border-none  hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed p-1"
          >
            <MinusIcon className="h-4 w-4" aria-hidden="true" />{" "}
            {/* Adjusted Icon Size */}
          </button>
          <span className="text-gray-600">|</span> {/* Separator */}
          <button
            type="button"
            onClick={handleIncrement}
            disabled={disabled}
            aria-label="Increment"
            className="bg-transparent border-none hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed p-1"
          >
            <PlusIcon className="h-4 w-4" aria-hidden="true" />{" "}
            {/* Adjusted Icon Size */}
          </button>
        </div>
      </div>
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default NumberInput;
