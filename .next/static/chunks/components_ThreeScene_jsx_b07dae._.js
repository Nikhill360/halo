(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_ThreeScene_jsx_b07dae._.js", {

"[project]/components/ThreeScene.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const ThreeScene = ()=>{
    _s();
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeScene.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            // Scene setup with better performance settings
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Scene();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Color(0x000000); // Set black background
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.WebGLRenderer({
                antialias: true,
                powerPreference: "high-performance",
                alpha: false // Disable transparency since we have black bg
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PCFSoftShadowMap;
            mountRef.current?.appendChild(renderer.domElement);
            // Enhanced lighting setup
            const ambientLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.AmbientLight(0xffffff, 0.7);
            scene.add(ambientLight);
            const directionalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DirectionalLight(0xffffff, 1.2);
            directionalLight.position.set(5, 5, 5);
            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 1024;
            directionalLight.shadow.mapSize.height = 1024;
            scene.add(directionalLight);
            // Add rim light for better 3D effect
            const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.DirectionalLight(0xffffff, 0.5);
            rimLight.position.set(-5, 5, -5);
            scene.add(rimLight);
            camera.position.z = 4;
            // Improved controls
            const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enableZoom = true;
            controls.minDistance = 2;
            controls.maxDistance = 10;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.0;
            // Load 3D model with loading manager
            const manager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.LoadingManager();
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"](manager);
            manager.onProgress = ({
                "ThreeScene.useEffect": (url, itemsLoaded, itemsTotal)=>{
                    console.log(`Loading file: ${url}. Loaded ${itemsLoaded}/${itemsTotal} files.`);
                }
            })["ThreeScene.useEffect"];
            loader.load('/models/2.glb', {
                "ThreeScene.useEffect": (gltf)=>{
                    const model = gltf.scene;
                    model.traverse({
                        "ThreeScene.useEffect": (node)=>{
                            if (node.isMesh) {
                                node.castShadow = true;
                                node.receiveShadow = true;
                            }
                        }
                    }["ThreeScene.useEffect"]);
                    // Center the model
                    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Box3().setFromObject(model);
                    const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector3());
                    model.position.sub(center);
                    scene.add(model);
                }
            }["ThreeScene.useEffect"], {
                "ThreeScene.useEffect": (progress)=>{
                    console.log('Loading progress:', progress.loaded / progress.total * 100 + '%');
                }
            }["ThreeScene.useEffect"], {
                "ThreeScene.useEffect": (error)=>{
                    console.error('Error loading model:', error);
                }
            }["ThreeScene.useEffect"]);
            // Optimized animation loop
            let frameId;
            const animate = {
                "ThreeScene.useEffect.animate": ()=>{
                    frameId = requestAnimationFrame(animate);
                    controls.update();
                    renderer.render(scene, camera);
                }
            }["ThreeScene.useEffect.animate"];
            animate();
            // Efficient resize handler with debounce
            let resizeTimeout;
            const handleResize = {
                "ThreeScene.useEffect.handleResize": ()=>{
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout({
                        "ThreeScene.useEffect.handleResize": ()=>{
                            camera.aspect = window.innerWidth / window.innerHeight;
                            camera.updateProjectionMatrix();
                            renderer.setSize(window.innerWidth, window.innerHeight);
                        }
                    }["ThreeScene.useEffect.handleResize"], 250);
                }
            }["ThreeScene.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // Enhanced cleanup
            return ({
                "ThreeScene.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(frameId);
                    controls.dispose();
                    scene.traverse({
                        "ThreeScene.useEffect": (object)=>{
                            if (object.geometry) object.geometry.dispose();
                            if (object.material) {
                                if (Array.isArray(object.material)) {
                                    object.material.forEach({
                                        "ThreeScene.useEffect": (material)=>material.dispose()
                                    }["ThreeScene.useEffect"]);
                                } else {
                                    object.material.dispose();
                                }
                            }
                        }
                    }["ThreeScene.useEffect"]);
                    renderer.dispose();
                    mountRef.current?.removeChild(renderer.domElement);
                }
            })["ThreeScene.useEffect"];
        }
    }["ThreeScene.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: mountRef,
        className: "w-full h-screen",
        style: {
            background: 'black'
        }
    }, void 0, false, {
        fileName: "[project]/components/ThreeScene.jsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
};
_s(ThreeScene, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = ThreeScene;
const __TURBOPACK__default__export__ = ThreeScene;
var _c;
__turbopack_refresh__.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_ThreeScene_jsx_b07dae._.js.map