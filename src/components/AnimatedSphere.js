import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere(){
    return <Sphere visible args={[1,100,200]} scame={2}>;
    <MeshDistortMaterial color="greenyellow" attach="material" distort={0.3} speed={2} roughness={1}/>
    </Sphere>
}