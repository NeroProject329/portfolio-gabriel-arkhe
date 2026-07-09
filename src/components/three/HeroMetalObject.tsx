"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function createBrushedMetalTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

  gradient.addColorStop(0, "#161616");
  gradient.addColorStop(0.22, "#686868");
  gradient.addColorStop(0.42, "#f2f2ec");
  gradient.addColorStop(0.58, "#8c8c88");
  gradient.addColorStop(0.78, "#222222");
  gradient.addColorStop(1, "#b7b7b1");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 1400; i++) {
    const y = Math.random() * canvas.height;
    const opacity = Math.random() * 0.18;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y + Math.random() * 3);
    ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
    ctx.lineWidth = Math.random() * 1.8;
    ctx.stroke();
  }

  for (let i = 0; i < 900; i++) {
    const y = Math.random() * canvas.height;
    const opacity = Math.random() * 0.16;

    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y + Math.random() * 2);
    ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
    ctx.lineWidth = Math.random() * 1.4;
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.45, 1.45);
  texture.anisotropy = 8;
  texture.needsUpdate = true;

  return texture;
}

function SilverMetalMaterial() {
  const brushedTexture = useMemo(() => createBrushedMetalTexture(), []);

  return (
    <meshPhysicalMaterial
      color="#d7d7d0"
      map={brushedTexture}
      metalness={1}
      roughness={0.18}
      clearcoat={1}
      clearcoatRoughness={0.06}
      reflectivity={1}
      envMapIntensity={2.35}
    />
  );
}

function DarkMetalMaterial() {
  const brushedTexture = useMemo(() => createBrushedMetalTexture(), []);

  return (
    <meshPhysicalMaterial
      color="#161616"
      map={brushedTexture}
      metalness={1}
      roughness={0.24}
      clearcoat={1}
      clearcoatRoughness={0.1}
      reflectivity={1}
      envMapIntensity={1.7}
    />
  );
}

function OrbitLine({
  rotation,
  scale,
  speed,
  dotOffset = 0,
}: {
  rotation: [number, number, number];
  scale: [number, number, number];
  speed: number;
  dotOffset?: number;
}) {
  const orbitRef = useRef<THREE.Group | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { lineObject, dotPosition } = useMemo(() => {
    const points: THREE.Vector3[] = [];

    for (let i = 0; i <= 256; i++) {
      const angle = (i / 256) * Math.PI * 2;

      points.push(
        new THREE.Vector3(Math.cos(angle) * 1.72, Math.sin(angle) * 0.54, 0),
      );
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
      color: "#f4f4ee",
      transparent: true,
      opacity: 0.78,
    });

    const lineObject = new THREE.Line(geometry, material);

    const angle = dotOffset;

    const dotPosition = new THREE.Vector3(
      Math.cos(angle) * 1.72,
      Math.sin(angle) * 0.54,
      0,
    );

    return { lineObject, dotPosition };
  }, [dotOffset]);

  useFrame((state) => {
    if (!orbitRef.current || prefersReducedMotion) return;

    const time = state.clock.elapsedTime;

    orbitRef.current.rotation.z = rotation[2] + time * speed;
  });

  return (
    <group ref={orbitRef} rotation={rotation} scale={scale}>
      <primitive object={lineObject} />

      <mesh position={dotPosition} scale={0.085}>
        <sphereGeometry args={[1, 40, 40]} />
        <SilverMetalMaterial />
      </mesh>
    </group>
  );
}

function HeroMetalScene() {
  const objectRef = useRef<THREE.Group | null>(null);
  const gyroscopeRef = useRef<THREE.Group | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    const object = objectRef.current;
    const gyroscope = gyroscopeRef.current;

    if (!object) return;

    const time = state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    const targetY = prefersReducedMotion
      ? -0.24
      : -0.24 + pointerX * 0.22 + Math.sin(time * 0.22) * 0.045;

    const targetX = prefersReducedMotion
      ? 0.16
      : 0.16 - pointerY * 0.14 + Math.sin(time * 0.32) * 0.035;

    object.rotation.y = THREE.MathUtils.lerp(object.rotation.y, targetY, 0.04);
    object.rotation.x = THREE.MathUtils.lerp(object.rotation.x, targetX, 0.04);

    object.position.y = prefersReducedMotion
      ? 0
      : Math.sin(time * 0.62) * 0.045;

    if (gyroscope && !prefersReducedMotion) {
      gyroscope.rotation.y = Math.sin(time * 0.24) * 0.08;
      gyroscope.rotation.z = Math.sin(time * 0.18) * 0.045;
    }
  });

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.28} />

      <directionalLight
        position={[-3.5, 5.2, 3.8]}
        intensity={2.6}
        color="#ffffff"
      />

      <directionalLight
        position={[3.2, -1.4, 3.2]}
        intensity={0.82}
        color="#d8d8d8"
      />

      <spotLight
        position={[0.2, 5.8, 4.6]}
        angle={0.36}
        penumbra={0.88}
        intensity={6.2}
        color="#ffffff"
      />

      <pointLight
        position={[-2.8, 1.4, 2.8]}
        intensity={2}
        color="#ffffff"
      />

      <pointLight
        position={[2.8, -2.2, 2.4]}
        intensity={1.1}
        color="#cfcfc9"
      />

      <group ref={objectRef} scale={1.38} rotation={[0.16, -0.24, -0.1]}>
        <group ref={gyroscopeRef}>
          {/* Corpo escuro central */}
          <mesh scale={[1.02, 1.02, 1.02]} rotation={[0.25, -0.32, 0.18]}>
            <sphereGeometry args={[0.74, 96, 96]} />
            <DarkMetalMaterial />
          </mesh>

          {/* Faixa grossa frontal vertical */}
          <mesh rotation={[1.42, 0.12, -0.34]} scale={[1.02, 1.02, 1.02]}>
            <torusGeometry args={[0.82, 0.105, 64, 260]} />
            <SilverMetalMaterial />
          </mesh>

          {/* Faixa grossa diagonal clara */}
          <mesh rotation={[0.68, -0.92, 0.68]} scale={[1.08, 1.08, 1.08]}>
            <torusGeometry args={[0.82, 0.12, 64, 260]} />
            <SilverMetalMaterial />
          </mesh>

          {/* Faixa grossa inferior escura */}
          <mesh rotation={[1.22, 0.7, 1.35]} scale={[1.12, 1.12, 1.12]}>
            <torusGeometry args={[0.78, 0.12, 64, 260]} />
            <DarkMetalMaterial />
          </mesh>

          {/* Faixa traseira escura para dar profundidade */}
          <mesh rotation={[0.9, 0.25, -1.02]} scale={[0.94, 0.94, 0.94]}>
            <torusGeometry args={[0.82, 0.085, 64, 240]} />
            <DarkMetalMaterial />
          </mesh>

          {/* Miolo interno com lâminas */}
          <mesh rotation={[0.86, -0.42, 0.48]} scale={[0.68, 0.68, 0.68]}>
            <torusGeometry args={[0.72, 0.055, 48, 220]} />
            <SilverMetalMaterial />
          </mesh>

          <mesh rotation={[1.12, 0.42, -0.68]} scale={[0.62, 0.62, 0.62]}>
            <torusGeometry args={[0.72, 0.048, 48, 220]} />
            <DarkMetalMaterial />
          </mesh>
        </group>

        {/* Órbitas externas finas */}
        <OrbitLine
          rotation={[0.82, -0.22, -0.18]}
          scale={[1.26, 1.26, 1.26]}
          speed={0.09}
          dotOffset={2.7}
        />

        <OrbitLine
          rotation={[1.04, 0.58, 0.74]}
          scale={[1.32, 1.32, 1.32]}
          speed={-0.075}
          dotOffset={5.25}
        />

        <OrbitLine
          rotation={[1.46, -0.7, -0.62]}
          scale={[1.18, 1.18, 1.18]}
          speed={0.055}
          dotOffset={0.74}
        />
      </group>

      <Environment preset="studio" background={false} />
    </>
  );
}

export function HeroMetalObject() {
  return (
    <div className="hero-metal-3d" aria-hidden="true">
      <Canvas
        className="hero-metal-canvas"
        camera={{ position: [0, 0, 4.55], fov: 32 }}
        dpr={[1, 1.7]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <HeroMetalScene />
        </Suspense>
      </Canvas>
    </div>
  );
}