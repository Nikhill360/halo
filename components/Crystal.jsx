"use client";

import React, { useEffect, useRef } from 'react'; // Removed useState import
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Crystal = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup with better performance settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
      alpha: true // Enable transparency for blur effect
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current?.appendChild(renderer.domElement);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Add rim light for better 3D effect
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    camera.position.z = 3;

    // Improved controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Load 3D model with loading manager
    const manager = new THREE.LoadingManager();
    const loader = new GLTFLoader(manager);
    
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log(`Loading file: ${url}. Loaded ${itemsLoaded}/${itemsTotal} files.`);
    };

    loader.load(
      '/models/halo_forerunner_crystal.glb',
      (gltf) => {
        const model = gltf.scene; // Fixed: Changed glb to gltf
        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            node.material.side = THREE.DoubleSide; // Fix: Ensure the material is double-sided
          }
        });
        
        // Center the model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        
        scene.add(model);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Optimized animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Efficient resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }, 250);
    };
    window.addEventListener('resize', handleResize);

    // Enhanced cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      controls.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []); // Removed the check for window

  return (
    <div 
      ref={mountRef} 
      className="w-full h-screen justify-center  "
      style={{ backdropFilter: 'blur(5px)' }} // Added blur effect
    >
        <div>
      <h1 className='relative   text-center bottom-2'>The Menachite Forerunner crystal</h1>
      </div>
    </div>
  );
};

export default Crystal;
