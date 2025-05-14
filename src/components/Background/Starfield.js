import React, { useEffect, useRef } from 'react';
import './Starfield.css';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    const maxStars = 1000;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize stars
    const initStars = () => {
      stars = [];
      for (let i = 0; i < maxStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: Math.floor(Math.random() * 50) - 25,
          vy: Math.floor(Math.random() * 50) - 25
        });
      }
    };

    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add twinkle effect
        const opacity = 0.2 + Math.random() * 0.8;
        ctx.globalAlpha = opacity;
      });
      
      ctx.globalAlpha = 1;
      moveStars();
    };

    // Move stars
    const moveStars = () => {
      stars.forEach(star => {
        star.x += star.vx / 60;
        star.y += star.vy / 60;
        
        // Reset star if it goes out of view
        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });
    };

    resizeCanvas();
    initStars();
    
    const animationId = requestAnimationFrame(function animate() {
      drawStars();
      requestAnimationFrame(animate);
    });

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="starfield-canvas"
    />
  );
};

export default Starfield;