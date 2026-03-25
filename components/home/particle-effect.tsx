'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// OpeniLink Logo SVG base64
const LOGO_IMAGE =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjI3MiAzOTEgNDcwIDM2NCI+CjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0gNTY0LjkwNiA0MTEuNDE0IEMgNTc3LjI2IDQxMC41NzcgNTk3LjMzMSA0MTEuMTg0IDYxMC40MzQgNDExLjE1OSBMIDY5Ni42MjEgNDExLjA5OCBDIDcwOC40NjMgNDExLjE2MSA3MTcuMDA4IDQxMS4xNjkgNzI1LjkzNiA0MjAuMTQxIEMgNzM5LjI2MiA0MzMuNTM1IDczNC43MDYgNDU5LjA5IDcxNi42NTkgNDY1LjY1OSBDIDcwNy41NzIgNDY4Ljk2NiA2OTIuMDkzIDQ2Ny45MTggNjgxLjk0NiA0NjcuODg0IEwgNjEzLjQ1OSA0NjcuNjcgQyA1OTguNjU5IDQ2Ny42NDQgNTczLjc3NCA0NjYuNDI5IDU2MC4wMTcgNDcwLjA1NCBDIDUyOS4xNDIgNDc4LjE4NyA1MzQuNzYyIDUxMS4xMzcgNTI0LjgxMyA1MzQuMzcgQyA1MTcuNTYyIDU1MS4zMDYgNTEwLjk1NiA1NTkuNDY3IDQ5Ny42NzIgNTcxLjc2MSBDIDUxMS4wMDkgNTgzLjc5IDUxNy42MDggNTkyLjQ3MyA1MjQuODYxIDYwOS4wNzQgQyA1MzMuNDIgNjI4LjA3MyA1MjkuODAxIDY1NS4zNDEgNTQ4Ljk2MiA2NjguMjc2IEMgNTYzLjIwNyA2NzcuODkyIDU5MC42MTYgNjc1LjMyMSA2MDcuNTY3IDY3NS4yNjcgTCA2NzkuNzI3IDY3NS4wMjcgQyA2OTMuOTA3IDY3NC45ODYgNzEzLjgyMyA2NzIuNDg5IDcyNC40MzYgNjgyLjQyOSBDIDc0MS44ODQgNjk4Ljc2OSA3MzMuNzA4IDcyOC45MTcgNzA5LjMwOSA3MzEuMTY5IEMgNjkzLjkwNCA3MzIuNTkgNjc3LjcwMiA3MzEuOTg0IDY2Mi4zOTQgNzMxLjk3NSBMIDU2OC4zMTEgNzMxLjg5MyBDIDU1My4zNCA3MzIuMDY4IDUzNy4xMTYgNzI3LjI4NiA1MjQuMDMgNzIwLjE2NSBDIDUwMS41NjcgNzA4LjE3NiA0ODUuMDk3IDY4Ny4zOSA0NzguNTY0IDY2Mi43OCBDIDQ3My41NjUgNjQzLjM3IDQ3NS43NzcgNjI2LjQxNyA0NTcuNDc1IDYxMS4zNDUgQyA0NDEuNzExIDU5OC4zNjIgNDIzLjM0MiA1OTkuODA1IDQwNC4yNiA1OTkuNzg3IEMgMzk3LjgzMSA1OTkuNzgxIDM4NS45NjIgNTk5LjE2MSAzNzkuNzYgNjAwLjAzMiBDIDM0OS4xNDUgNjA0LjMzMyAzNTMuNzI3IDYyNC4xODkgMzUyLjUyNiA2NDUuNzczIEMgMzUwLjI3NCA2NjcuNTY1IDM1OC45NyA3MDQuMzQ4IDM0NS42NjMgNzIyLjYwNiBDIDMzNy4zMTEgNzM0LjA2NCAzMTQuODIxIDczNC41OTUgMzA1LjEzNSA3MjQuODg4IEMgMjk4LjE2NiA3MTcuOTAzIDI5NS44MTcgNzExLjY5OCAyOTUuMzkxIDcwMS42NzEgQyAyOTQuNzgyIDY4Ny4zMTIgMjk1LjQ2MSA2NzMuNTUgMjk1LjM0NiA2NTkuMjQgQyAyOTUuMDMyIDYyNi4yMTcgMjkyLjUzOSA1OTcuNzQ4IDMxNi4wMjYgNTcxLjMzNiBDIDM0OC4wNzYgNTM1LjI5MyAzODQuMDUzIDU0NC40NzkgNDI2LjI5OSA1NDIuNzg5IEMgNDQ4LjMzOCA1NDEuOTA4IDQ2Ny44NiA1MjkuMDQ5IDQ3My4xNDYgNTA3LjEyNSBDIDQ3NS4zMiA0OTguMTA2IDQ3Ni40NTggNDg3Ljc3MSA0NzkuMDk3IDQ3OC44MjIgQyA0ODIuOTIxIDQ2NS44MjUgNDg5LjQzOSA0NTMuNzc4IDQ5OC4yMjYgNDQzLjQ2NyBDIDUxNS41MjQgNDIzLjUxNyA1MzguODg2IDQxMy4zNDYgNTY0LjkwNiA0MTEuNDE0IHoiLz4KPHBhdGggZmlsbD0iIzA3QzE2MCIgZD0iTSA1NTQuNTEzIDU0My4xNzQgQyA1NzkuMjM3IDU0MS44MjEgNjA3Ljc2MyA1NDMuMDEgNjMzLjU4NSA1NDIuODc4IEMgNjQ4Ljg0NSA1NDIuOCA3MDUuNzM4IDU0MC43NzkgNzE3LjI1OSA1NDUuNTUyIEMgNzM4LjkzMSA1NTQuNTI5IDc0MS40MjEgNTkwLjE5NCA3MTEuMTUgNTk5Ljc3MyBDIDY3My42NzYgNjAxLjU1MSA2MzMuNjA0IDU5OC45MDMgNTk1Ljk4NSA2MDAuMDI2IEMgNTg2LjQ1OSA2MDAuMzEgNTUyLjMyNyA2MDEuMDY0IDU0NS44NDUgNTk2Ljg4NiBDIDUyMS4zNzEgNTgxLjExIDUyOC41NjIgNTUwLjU1MiA1NTQuNTEzIDU0My4xNzQgeiIvPgo8L3N2Zz4=';

const VERTEX_SHADER = `
uniform float uTime;
uniform float uMorph;
uniform float uPointSize;
uniform int uEffectMode;
uniform float uEffectIntensity;
uniform float uExplosionTime;
attribute vec3 targetPosition;
attribute vec3 targetColor;
attribute vec3 color;
attribute vec3 randomOffset;
varying vec3 vColor;
varying float vDistance;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vColor = mix(color, targetColor, uMorph);
  vec3 pos = mix(position, targetPosition, uMorph);

  // default 效果模式
  float noise = sin(uTime * 1.5 + position.x * 0.3) * cos(uTime * 1.5 + position.y * 0.3);
  pos += normalize(pos) * noise * (0.2 * (1.0 - uMorph));
  pos.x += sin(uTime * 0.3 + position.z) * 0.1;
  pos.y += cos(uTime * 0.3 + position.x) * 0.1;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float dist = length(pos);
  vDistance = dist;
  gl_PointSize = (uPointSize / -mvPosition.z) * (1.2 + sin(uTime * 3.0 + dist * 0.15) * 0.5);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const FRAGMENT_SHADER = `
uniform float uTime;
varying vec3 vColor;
varying float vDistance;

void main() {
  float dist = distance(gl_PointCoord, vec2(0.5));
  if (dist > 0.5) discard;
  float strength = pow(1.0 - dist * 2.0, 1.6);
  vec3 finalColor = vColor * 2.0;
  float alpha = strength * (0.8 + sin(vDistance * 0.3 + uTime) * 0.2);
  gl_FragColor = vec4(finalColor, alpha);
}
`;

const PARTICLE_COUNT = 90000;
const PARTICLE_SIZE = 200;

export function ParticleEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 场景初始化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    // 移动端拉远，桌面端正常
    const isMobile = width < 768;
    camera.position.set(isMobile ? -5 : -15, isMobile ? -3 : -5, isMobile ? 90 : 65);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 粒子几何体
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const targetColors = new Float32Array(PARTICLE_COUNT * 3);
    const randomOffsets = new Float32Array(PARTICLE_COUNT * 3);

    const greenColor = new THREE.Color(0x00ff66);
    const brightWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const t = (Math.random() - 0.5) * 5.0;
      const angle = Math.random() * Math.PI * 2;
      const radiusBase = 0.4 + Math.pow(Math.abs(t), 2.4);
      const radius = radiusBase * (0.75 + Math.random() * 0.55);
      const x = radius * Math.cos(angle) * 2.9;
      const z = radius * Math.sin(angle) * 2.9;
      const y = t * 7.5;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      targetPositions[i3] = x;
      targetPositions[i3 + 1] = y;
      targetPositions[i3 + 2] = z;

      randomOffsets[i3] = (Math.random() - 0.5) * 2;
      randomOffsets[i3 + 1] = (Math.random() - 0.5) * 2;
      randomOffsets[i3 + 2] = (Math.random() - 0.5) * 2;

      const color = Math.random() > 0.7 ? greenColor : brightWhite;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
      targetColors[i3] = color.r;
      targetColors[i3 + 1] = color.g;
      targetColors[i3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('targetPosition', new THREE.BufferAttribute(targetPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('targetColor', new THREE.BufferAttribute(targetColors, 3));
    geometry.setAttribute('randomOffset', new THREE.BufferAttribute(randomOffsets, 3));

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uMorph: { value: 0 },
        uPointSize: { value: PARTICLE_SIZE },
        uEffectMode: { value: 0 },
        uEffectIntensity: { value: 0 },
        uExplosionTime: { value: 0 },
      },
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // 加载 logo 图片并映射到粒子目标位置
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = LOGO_IMAGE;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resolution = 200;
      const aspect = img.width / img.height;
      const drawWidth = aspect > 1 ? resolution : resolution * aspect;
      const drawHeight = aspect > 1 ? resolution / aspect : resolution;
      canvas.width = resolution;
      canvas.height = resolution;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, resolution, resolution);
      ctx.drawImage(
        img,
        (resolution - drawWidth) / 2,
        (resolution - drawHeight) / 2,
        drawWidth,
        drawHeight,
      );

      const imgData = ctx.getImageData(0, 0, resolution, resolution).data;
      const validPoints: { pos: number[]; col: number[] }[] = [];

      for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
          const idx = (y * resolution + x) * 4;
          const r = imgData[idx],
            g = imgData[idx + 1],
            b = imgData[idx + 2];
          if ((r + g + b) / 3 > 15) {
            validPoints.push({
              pos: [
                (x / resolution - 0.5) * 38,
                (0.5 - y / resolution) * 38,
                (Math.random() - 0.5) * 4,
              ],
              col: [r / 255, g / 255, b / 255],
            });
          }
        }
      }

      if (validPoints.length > 0) {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const i3 = i * 3;
          const point = validPoints[i % validPoints.length];
          targetPositions[i3] = point.pos[0] + (Math.random() - 0.5) * 0.4;
          targetPositions[i3 + 1] = point.pos[1] + (Math.random() - 0.5) * 0.4;
          targetPositions[i3 + 2] = point.pos[2] + (Math.random() - 0.5) * 1.5;
          targetColors[i3] = point.col[0];
          targetColors[i3 + 1] = point.col[1];
          targetColors[i3 + 2] = point.col[2];
        }
        geometry.attributes.targetPosition.needsUpdate = true;
        geometry.attributes.targetColor.needsUpdate = true;
      }
    };

    // 动画循环
    let time = 0;
    let morphFactor = 0;
    let animationId: number;

    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.008;

      // 缓慢 Y 轴旋转，微弱浮动
      points.rotation.y += 0.001;
      points.rotation.x = Math.sin(time * 0.1) * 0.03;

      material.uniforms.uTime.value = time;

      // 平滑变形到 logo
      const targetMorph = 1.0;
      morphFactor += (targetMorph - morphFactor) * 0.05;
      material.uniforms.uMorph.value = morphFactor;

      renderer.render(scene, camera);
    }

    animate();

    // 响应式
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 清理
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-40 md:opacity-60"
      aria-hidden="true"
    />
  );
}
