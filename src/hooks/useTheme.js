import { useEffect } from 'react';

const useTheme = (theme) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Store theme preference in localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);
};

export default useTheme;