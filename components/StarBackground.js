"use client";
import React, { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Create stars with more realistic properties
    const stars = [];
    const starCount = 150;
    const starColors = ["#ffffff", "#fffaf0", "#f8f8ff", "#f0f8ff", "#e6e6fa"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.5 + 0.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // Animation loop
    let animationFrame;
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.twinklePhase += star.twinkleSpeed;
        const twinkleOpacity = star.opacity * (0.7 + 0.3 * Math.sin(star.twinklePhase));

        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, star.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.globalAlpha = twinkleOpacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 1;

        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default StarsBackground;



