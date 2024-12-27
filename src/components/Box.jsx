import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function Box({ position, size, color }) {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef();
	useFrame((state, delta) => {
		ref.current.rotation.y += !isHovered ? delta : 0;
	});
	return (
		<mesh
			ref={ref}
			position={position}
			onPointerEnter={(e) => {
				e.stopPropagation();
				setIsHovered(true);
			}}
			onPointerLeave={(e) => {
				e.stopPropagation();
				setIsHovered(false);
			}}
		>
			<boxGeometry args={size} />
			<meshStandardMaterial color={isHovered ? "red" : color} />
		</mesh>
	);
}

export default React.memo(Box);
