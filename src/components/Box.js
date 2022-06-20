import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader"
import texture from "../images/map.jpg";

export default function Box() {
    const colorMap = useLoader(TextureLoader, texture);

    return <mesh rotation={[90, 0, 20]}>
        <boxBufferGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial map={colorMap} color="darkslategrey" transparent={true} opacity={0.8} />
    </mesh>;
}