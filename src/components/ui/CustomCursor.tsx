"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState("Guest");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isLoaded, setIsLoaded] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Smooth spring animations for cursor
  const cursorX = useSpring(0, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });
  const cursorY = useSpring(0, {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  });

  // Smoother spring animations for text tag
  const tagX = useSpring(0, {
    stiffness: 150,
    damping: 15,
    mass: 0.8,
  });
  const tagY = useSpring(0, {
    stiffness: 150,
    damping: 15,
    mass: 0.8,
  });

  // Define different cursor states with their colors
  const cursorStates = {
    default: {
      text: "Guest",
      color: "#7839ee80",
      hoverColor: "#7839ee"
    },
    link: {
      text: "View",
      color: "#7839ee80",
      hoverColor: "#7839ee"
    },
    button: {
      text: "Click",
      color: "#7839ee80",
      hoverColor: "#7839ee"
    },
    image: {
      text: "View",
      color: "#7839ee80",
      hoverColor: "#7839ee"
    },
    input: {
      text: "Type",
      color: "#7839ee80",
      hoverColor: "#7839ee"
    }
  };

  // Initialize cursor position immediately
  useEffect(() => {
    const initialCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      document.removeEventListener("mousemove", initialCursor);
      setIsLoaded(true);
    };

    document.addEventListener("mousemove", initialCursor);
    setIsVisible(true);

    return () => {
      document.removeEventListener("mousemove", initialCursor);
    };
  }, []);

  useEffect(() => {
    let styleElement: HTMLStyleElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update spring animations
      cursorX.set(clientX);
      cursorY.set(clientY);
      tagX.set(clientX + 8);
      tagY.set(clientY + 16);
      
      setMousePosition({ x: clientX, y: clientY });
      
      const target = e.target as HTMLElement;
      
      // Check if target is a description text (paragraphs with specific classes)
      const isDescription = 
        target.tagName.toLowerCase() === 'p' || 
        target.classList.contains('text-gray-400') ||
        target.classList.contains('text-gray-300') ||
        target.closest('p.text-gray-400') !== null ||
        target.closest('p.text-gray-300') !== null;

      // Skip interaction for descriptions
      if (isDescription) {
        setIsPointer(false);
        setCursorVariant("default");
        setHoverText("Guest");
        return;
      }

      // Special case for dashboard video
      const isDashboard = 
        target.tagName.toLowerCase() === 'video' || 
        target.closest('video') !== null ||
        target.classList.contains('dashboard-preview');

      if (isDashboard) {
        setIsPointer(true);
        setCursorVariant("button");
        setHoverText("Watch Demo");
        return;
      }

      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.closest("[role='button']") !== null ||
        target.closest(".dropdown-item") !== null;

      setIsPointer(isClickable);

      // Remove cursor: pointer from all elements
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.textContent = '* { cursor: none !important; }';
        document.head.appendChild(styleElement);
      }

      // Determine cursor variant and text based on element
      let variant = "default";
      let text = "Guest";

      if (isClickable) {
        const dataText = target.getAttribute('data-hover-text');
        const elementType = target.tagName.toLowerCase();
        const role = target.getAttribute('role');
        
        if (dataText) {
          text = dataText;
          variant = "button";
        } else if (elementType === 'a' || target.closest('a')) {
          variant = "link";
          text = target.textContent?.trim() || "View";
        } else if (elementType === 'button' || target.closest('button') || role === 'button' || target.closest("[role='button']")) {
          variant = "button";
          text = target.textContent?.trim() || "Click";
        } else if (elementType === 'img' || target.closest('img')) {
          variant = "image";
          text = "View Image";
        } else if (elementType === 'input' || target.closest('input')) {
          variant = "input";
          text = "Type";
        }

        // Special cases
        if (role === 'button') variant = "button";
        if (target.classList.contains('link')) variant = "link";
        if (target.closest('.dropdown-item')) {
          variant = "link";
          text = target.textContent?.trim() || "Select";
        }
      }

      setCursorVariant(variant);
      setHoverText(text);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [cursorX, cursorY, tagX, tagY]);

  return (
    <>
      {/* Default cursor that shows immediately */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[99999] transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          opacity: isLoaded ? 0 : 1,
        }}
      >
        <Image
          src="/cursor.png"
          alt="cursor"
          width={16}
          height={16}
          style={{ width: "16px", height: "16px" }}
          priority={true}
        />
      </div>

      <AnimatePresence>
        {isVisible && (
          <>
            {/* Animated cursor */}
            <motion.div
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
                pointerEvents: "none",
                zIndex: 99999,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: isLoaded ? 1 : 0,
              }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5,
              }}
            >
              <Image
                src="/cursor.png"
                alt="cursor"
                width={20}
                height={20}
                priority={true}
                className={`transition-transform duration-200 ${
                  isPointer ? "scale-125" : "scale-100"
                }`}
                style={{ pointerEvents: "none", width: "20px", height: "20px" }}
              />
            </motion.div>

            {/* Dynamic text tag */}
            <motion.div
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                x: tagX,
                y: tagY,
                pointerEvents: "none",
                zIndex: 99998,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: isPointer ? 1.1 : 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                mass: 0.8,
              }}
            >
              <motion.div
                className="flex items-center rounded-full px-3.5 py-1 shadow-lg backdrop-blur-sm"
                animate={{
                  backgroundColor: isPointer
                    ? cursorStates[cursorVariant as keyof typeof cursorStates]
                        .hoverColor
                    : cursorStates[cursorVariant as keyof typeof cursorStates]
                        .color,
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  key={hoverText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[13px] font-medium text-white tracking-wide whitespace-nowrap select-none"
                >
                  {hoverText}
                </motion.span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
