import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Archer from "./Archer";
import "../../../styles.css";
import "../../../page2styles.css";
function AppA() {
  const [action, setAction] = useState("Run Forward");
  return (
    <>
      <Canvas style={{ width: '130vh', height: '100vh'}} camera={{ position: [0, 1, 2] }}>
        <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <Suspense fallback={null}>
          <Archer action={action} />
        </Suspense>
        <OrbitControls target={[0, 1, 0]} autoRotate />
      </Canvas>
      <div className="controls">

      <button id="foot"><button className="bout button-os" onClick={() => setAction("Run Forward")}>Avancer</button></button>
      <button id="foot"><button  className="bout button-os" onClick={() => setAction("Death")}>Mourir</button></button>
      <button id="foot"><button  className="bout button-os " onClick={() => setAction("Draw Arrow")}>Tirer une flèche</button></button>
      <button id="foot"> <button  className="bout button-os" onClick={() => setAction("Standing Idle")}>Immobile</button></button>
      </div>
    </>
  );
}


export default AppA;
