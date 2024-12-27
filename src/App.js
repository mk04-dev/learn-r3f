import {
	OrbitControls,
	ScrollControls,
	Stage,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import IphoneX from "./components/IPhoneX";
import React, { Suspense, useEffect, useRef } from "react";
import Overlay from "./components/Overlay";
import Container from "./components/Container";

function App() {

	return (
		<Canvas shadows dpr={[1, 2]} camera={{ fov: 75 }}>
			<Container/>
		</Canvas>
	);
}

export default App;
