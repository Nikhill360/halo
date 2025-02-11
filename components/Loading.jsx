// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { Suspense } from "react";

// // Model Component 
// function Model() {
//   const { scene } = useGLTF("/models/halogear.glb");
//   return <primitive object={scene} scale={1} position={[0, 0, 0]} />;
// }

// // Loading Screen Component
// function LoadingScreen() {
//   return (
//     <Html center>
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//         <style jsx>{`
//           .loading-container {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }
          
//           .loading-spinner {
//             width: 50px;
//             height: 50px;
//             border: 5px solid #333;
//             border-top: 5px solid #fff;
//             border-radius: 50%;
//             animation: spin 1s linear infinite;
//           }
          
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     </Html>
//   );
// }

// export default function ModelViewer() {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
//         <color attach="background" args={["#111"]} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 5, 2]} intensity={1} castShadow />
//         <Suspense fallback={<LoadingScreen />}>
//           <Model />
//         </Suspense>
//         <OrbitControls 
//           enableZoom={true}
//           minDistance={2}
//           maxDistance={10}
//           enableDamping={true}
//           dampingFactor={0.05}
//         />
//       </Canvas>
//     </div>
//   );
// }
