import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeDText = () => {
    const canvasRef = useRef(null);
    let scene, camera, renderer, textMesh;

    // Handle resize function
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };

    useEffect(() => {
        // Cleanup function
        const cleanup = () => {
            window.removeEventListener('resize', handleResize);
            if (renderer) {
                renderer.dispose();
            }
        };

        const init = () => {
            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.z = 5;

            // Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvasRef.current.appendChild(renderer.domElement);

            // Ambient light
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            // Directional light (Green light)
            const directionalLight = new THREE.DirectionalLight(0x00ff00, 1);
            directionalLight.position.set(0, 0, 1);
            scene.add(directionalLight);

            // Custom font loader
            const fontLoader = new FontLoader();
            fontLoader.load('/fonts/helvetiker_regular.json', (font) => {
                // Text geometry
                const textGeometry = new TextGeometry('Iresh Rajitha Kalhra', {
                    font: font,
                    size: 1,
                    height: 0.5,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.05,
                    bevelSize: 0.04,
                    bevelOffset: 0,
                    bevelSegments: 5,
                });

                const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
                textMesh = new THREE.Mesh(textGeometry, textMaterial);

                // Remove any existing text mesh
                scene.remove(...scene.children.filter((obj) => obj instanceof THREE.Mesh));

                scene.add(textMesh);
            });

            window.addEventListener('resize', handleResize);

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);
                if (textMesh) {
                    // Rotate the 3D object if desired
                    textMesh.rotation.x += 0.01;
                    textMesh.rotation.y += 0.01;
                }
                renderer.render(scene, camera);
            };

            animate();

            // Cleanup on unmount
            return cleanup;
        };

        init();
    }, []);

    return <div ref={canvasRef} />;
};

export default ThreeDText;
