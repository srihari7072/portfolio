"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 160;
const RADIUS = 6.5;
const LINK_DISTANCE = 1.7;

function generateGraph() {
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const v = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    );
    v.normalize();
    v.multiplyScalar(RADIUS * (0.4 + Math.random() * 0.6));
    nodes.push(v);
  }

  const linePositions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) {
        linePositions.push(nodes[i].x, nodes[i].y, nodes[i].z);
        linePositions.push(nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
  }

  const pointPositions = new Float32Array(nodes.length * 3);
  nodes.forEach((n, i) => {
    pointPositions[i * 3] = n.x;
    pointPositions[i * 3 + 1] = n.y;
    pointPositions[i * 3 + 2] = n.z;
  });

  return { pointPositions, linePositions: new Float32Array(linePositions) };
}

function Graph() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const { pointPositions, linePositions } = useMemo(generateGraph, []);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!outerRef.current || !innerRef.current) return;

    target.current.x = state.pointer.y * 0.12;
    target.current.y = state.pointer.x * 0.18;

    outerRef.current.rotation.y += delta * 0.035;
    outerRef.current.rotation.x = THREE.MathUtils.lerp(
      outerRef.current.rotation.x,
      target.current.x,
      0.02
    );

    innerRef.current.rotation.y -= delta * 0.02;
    innerRef.current.rotation.z += delta * 0.012;
  });

  return (
    <group ref={outerRef}>
      <group ref={innerRef}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#34d6b4" transparent opacity={0.15} />
        </lineSegments>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#34d6b4" size={0.045} sizeAttenuation transparent opacity={0.75} />
        </points>
      </group>
    </group>
  );
}

export default function GlobalBackground() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Graph />
      </Canvas>
    </div>
  );
}
