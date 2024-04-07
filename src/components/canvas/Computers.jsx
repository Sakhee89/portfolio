/* eslint-disable */
import { useGLTF } from "@react-three/drei";

export default function Computers({ isMobile }) {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -1.5, -1.6] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}
