import React from "react";
import { Scroll } from "@react-three/drei";
import Section from "./Section";

function Overlay() {
	return (
		<Scroll html>
			<div className="w-screen relative">
				<div className="h-screen"></div>
				<Section>
					<div className="font-bold">Cấu hình</div>
					<table>
						<tr>
							<td>Hệ điều hành</td>
							<td>IOS 12</td>
						</tr>
						<tr>
							<td>CPU</td>
							<td>Apple A11 Blonic</td>
						</tr>
						<tr>
							<td>Tốc độ CPU</td>
							<td>2.39 GHz</td>
						</tr>
						<tr>
							<td>GPU</td>
							<td>Apple GPU 3 nhân</td>
						</tr>
						<tr>
							<td>RAM</td>
							<td>3 GB</td>
						</tr>
						<tr>
							<td>Dung lượng</td>
							<td>64 GB</td>
						</tr>
						<tr>
							<td>Dung lượng khả dụng</td>
							<td>55 GB</td>
						</tr>
					</table>
				</Section>
				<Section right>
					<div className="font-bold">HAHAHAHAHa</div>
				</Section>
				<Section>
					<div className="font-bold">HAHAHAHAHa</div>
				</Section>
			</div>
		</Scroll>
	);
}
export default React.memo(Overlay);
