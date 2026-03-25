'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const width = canvas.offsetWidth;
    let phi = 0;

    const globe = createGlobe(canvas, {
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 0.4,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [7 / 255, 193 / 255, 96 / 255],
      glowColor: [0.05, 0.05, 0.05],
      devicePixelRatio: 2,
      markers: [
        { location: [39.9042, 116.4074], size: 0.1 },
        { location: [31.2304, 121.4737], size: 0.08 },
        { location: [22.3193, 114.1694], size: 0.06 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [37.5665, 126.978], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.06 },
        { location: [-33.8688, 151.2093], size: 0.04 },
        { location: [48.8566, 2.3522], size: 0.05 },
      ],
    });

    // 自动旋转
    const interval = setInterval(() => {
      phi += 0.005;
      globe.update({ phi });
    }, 1000 / 60);

    setTimeout(() => {
      canvas.style.opacity = '1';
    }, 0);

    return () => {
      clearInterval(interval);
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-square w-full max-w-[600px]',
        className,
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        ref={canvasRef}
      />
    </div>
  );
}
