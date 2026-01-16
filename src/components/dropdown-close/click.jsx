//dropdown that closes on outside click
import React, { useEffect, useRef, useState } from "react";

const ClickOutsideDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div>
      <h1>Close dropdown on outside click</h1>
      <div ref={dropdownRef}>
        <button variant={"outline"} onClick={toggleDropdown}>
          Select an option
        </button>
        {isOpen && (
          <div>
            <div>
              {["Option 1", "Option 2", "Option 3"].map((option, index) => (
                <button key={index}>{option}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClickOutsideDropdown;
