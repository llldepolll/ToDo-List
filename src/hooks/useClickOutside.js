import { useEffect, useState } from 'react';

export default function useClickOutside(ref) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen) {
      window.addEventListener("mousedown", handleClickOutside)
      return () => window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  return [isOpen, setIsOpen];
}
