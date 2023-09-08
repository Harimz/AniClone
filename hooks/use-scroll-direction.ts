import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");
  const [beyondNavbar, setBeyondNavbar] = useState(false);

  const navbarHeight = 70; // Adjust to your navbar height

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if user has scrolled past the navbar
      if (currentScrollTop > navbarHeight) {
        setBeyondNavbar(true);
      } else {
        setBeyondNavbar(false);
      }

      // Check scroll direction
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("DOWN");
      } else {
        setScrollDirection("UP");
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollDirection, beyondNavbar };
};

export default useScrollDirection;
