import { useState, useEffect, useRef } from "react";

/**
 * Returns true while the mouse has moved recently, false after `timeout` ms of inactivity.
 * Useful for showing UI chrome (floating menus, sidebar buttons) only during mouse use.
 */
export function useMouseActive(timeout = 2000): boolean {
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsActive(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsActive(false), timeout);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [timeout]);

  return isActive;
}
