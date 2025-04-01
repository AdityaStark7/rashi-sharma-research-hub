
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import { Mesh, MathUtils } from 'three';

interface CardProps {
  title: string;
  color: string;
  hoveredColor: string;
  position: [number, number, number];
  rotation?: [number, number, number];
}

const Card: React.FC<CardProps> = ({ title, color, hoveredColor, position, rotation = [0, 0, 0] }) => {
  const mesh = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = MathUtils.lerp(
        mesh.current.rotation.x,
        hovered ? rotation[0] + 0.2 : rotation[0],
        0.1
      );
      mesh.current.rotation.y = MathUtils.lerp(
        mesh.current.rotation.y,
        hovered ? rotation[1] + 0.2 : rotation[1],
        0.1
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        scale={clicked ? 1.2 : 1}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 0.08, 1]} />
        <meshStandardMaterial 
          color={hovered ? hoveredColor : color} 
          metalness={0.5}
          roughness={0.2}
        />
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.12}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </mesh>
    </Float>
  );
};

interface ThreeDCardProps {
  cards: {
    title: string;
    color: string;
    hoveredColor: string;
  }[];
}

const ThreeDCard: React.FC<ThreeDCardProps> = ({ cards }) => {
  return (
    <div className="w-full h-[300px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
        
        {cards.map((card, i) => {
          // Calculate position in a circular pattern
          const angle = (i / cards.length) * Math.PI * 2;
          const radius = 2;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          
          return (
            <Card
              key={i}
              title={card.title}
              color={card.color}
              hoveredColor={card.hoveredColor}
              position={[x, 0, z]}
              rotation={[0, -angle, 0]}
            />
          );
        })}
      </Canvas>
      <div className="absolute bottom-2 left-2 bg-white/70 px-3 py-1 rounded-md text-xs text-gray-700">
        Interactive - Hover and click on cards
      </div>
    </div>
  );
};

export default ThreeDCard;
