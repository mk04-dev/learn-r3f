import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Sphere({ position, size, color }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.y += delta;
        ref.current.position.y = position[2] +  Math.sin(state.clock.elapsedTime * 3) / 2
    })
    return (
        <mesh ref={ref}
            position={position}
            scale={isClicked ? 2 : 1}
            onPointerEnter={(e) => {
                e.stopPropagation();
                setIsHovered(true);
            }}
            onPointerLeave={(e) => {
                e.stopPropagation();
                setIsHovered(false);
            }}
            onClick={(e) => {
                e.stopPropagation();
                setIsClicked(!isClicked);
            }}
        >
            <sphereGeometry args={size}/>
            <meshStandardMaterial color={isHovered ? "red" : color} wireframe />
        </mesh>
    );
}

export default React.memo(Sphere);
