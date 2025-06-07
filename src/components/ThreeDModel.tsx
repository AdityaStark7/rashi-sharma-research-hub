
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PresentationControls, Environment } from '@react-three/drei';
import { Mesh, Group } from 'three';

const DNA = () => {
  const group = useRef<Group>(null);
  const basePairCount = 10;
  const radius = 2;
  const height = 7;
  const twistRate = 0.5;

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  // Generate the DNA helix
  const strandPoints: Array<{pos: [number, number, number]; color: string; index: number}> = [];
  const basePairs: Array<{from: [number, number, number]; to: [number, number, number]; color: string}> = [];

  for (let i = 0; i < basePairCount; i++) {
    const t = i / basePairCount;
    const y = height * (t - 0.5);
    const angle1 = i * twistRate;
    const angle2 = angle1 + Math.PI;

    // First strand
    const x1 = Math.cos(angle1) * radius;
    const z1 = Math.sin(angle1) * radius;
    
    // Second strand
    const x2 = Math.cos(angle2) * radius;
    const z2 = Math.sin(angle2) * radius;
    
    strandPoints.push({ pos: [x1, y, z1], color: "blue", index: i });
    strandPoints.push({ pos: [x2, y, z2], color: "red", index: i + basePairCount });
    
    // Base pair
    if (i > 0) {
      basePairs.push({ 
        from: [x1, y, z1], 
        to: [x2, y, z2], 
        color: i % 2 === 0 ? "green" : "purple" 
      });
    }
  }

  return (
    <group ref={group}>
      {/* DNA strands */}
      {strandPoints.map((point, i) => (
        <mesh key={i} position={point.pos}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color={point.color as any} />
        </mesh>
      ))}
      
      {/* DNA connections within strands */}
      {strandPoints.map((point, i) => {
        const next = strandPoints.find(p => 
          (point.index < basePairCount && p.index === point.index + 1 && p.color === point.color) || 
          (point.index >= basePairCount && p.index === point.index + 1 && p.color === point.color)
        );
        
        if (next) {
          const distance = Math.sqrt(
            Math.pow(next.pos[0] - point.pos[0], 2) + 
            Math.pow(next.pos[1] - point.pos[1], 2) + 
            Math.pow(next.pos[2] - point.pos[2], 2)
          );
          
          const midpoint: [number, number, number] = [
            (next.pos[0] + point.pos[0]) / 2,
            (next.pos[1] + point.pos[1]) / 2,
            (next.pos[2] + point.pos[2]) / 2
          ];
          
          return (
            <group key={`line-${i}`} position={midpoint}>
              <mesh>
                <cylinderGeometry args={[0.1, 0.1, distance]} />
                <meshStandardMaterial color={point.color as any} />
              </mesh>
            </group>
          );
        }
        return null;
      })}
      
      {/* Base pairs connecting the two strands */}
      {basePairs.map((pair, i) => {
        const distance = Math.sqrt(
          Math.pow(pair.to[0] - pair.from[0], 2) + 
          Math.pow(pair.to[1] - pair.from[1], 2) + 
          Math.pow(pair.to[2] - pair.from[2], 2)
        );
        
        const midpoint: [number, number, number] = [
          (pair.to[0] + pair.from[0]) / 2,
          (pair.to[1] + pair.from[1]) / 2,
          (pair.to[2] + pair.from[2]) / 2
        ];
        
        return (
          <group key={`base-${i}`} position={midpoint}>
            <mesh>
              <cylinderGeometry args={[0.05, 0.05, distance]} />
              <meshStandardMaterial color={pair.color as any} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const FloatingMolecules = () => {
  const meshRef1 = useRef<Mesh>(null);
  const meshRef2 = useRef<Mesh>(null);
  const meshRef3 = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (meshRef1.current) {
      meshRef1.current.rotation.x = time * 0.2;
      meshRef1.current.rotation.y = time * 0.3;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = time * 0.3;
      meshRef2.current.rotation.z = time * 0.2;
    }
    
    if (meshRef3.current) {
      meshRef3.current.rotation.y = time * 0.4;
      meshRef3.current.rotation.z = time * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef1} position={[-3, 2, -2]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial color={"hotpink" as any} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.5}>
        <mesh ref={meshRef2} position={[3.5, -1, -1]}>
          <icosahedronGeometry args={[0.8]} />
          <meshStandardMaterial color={"lightblue" as any} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef3} position={[0, 3, -3]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color={"lightgreen" as any} />
        </mesh>
      </Float>
    </group>
  );
};

const ThreeDModel: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
        
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <DNA />
          <FloatingMolecules />
        </PresentationControls>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
        <Environment preset="sunset" />
      </Canvas>
      <div className="absolute bottom-4 left-4 bg-white/70 px-3 py-1 rounded-md text-xs text-gray-700">
        Interactive DNA Model - Drag to rotate
      </div>
    </div>
  );
};

export default ThreeDModel;
