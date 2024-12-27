import { OrbitControls, ScrollControls, Stage } from "@react-three/drei";
import Overlay from "./Overlay";
import { Suspense, useEffect, useRef } from "react";
import IphoneX from "./IPhoneX";

export default function Container() {
	const ref = useRef();
	return (
		<>
			<ScrollControls pages={4} damping={0.25}>
				<Overlay />
				<Suspense fallback={null}>
					<Stage
						controls={ref}
						preset="rembrandt"
						intensity={1}
						environment="sunset"
					>
						<IphoneX orbitRef={ref}/>
					</Stage>
				</Suspense>
			</ScrollControls>
			<OrbitControls
				ref={ref}
				enableZoom={false}
				enablePan={false}
                autoRotate
				autoRotateSpeed={5}
			/>
		</>
	);
}
