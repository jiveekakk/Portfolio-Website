import { useEffect } from 'react';

const useLightsaberCursor = (theme) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    // Create custom cursor element
    const cursor = document.createElement('div');
    cursor.className = `custom-cursor ${theme}-cursor`;
    document.body.appendChild(cursor);
    document.body.style.cursor = 'none';

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor.parentNode) {
        document.body.removeChild(cursor);
      }
      document.body.style.cursor = 'default';
    };
  }, [theme]);
};

export default useLightsaberCursor;