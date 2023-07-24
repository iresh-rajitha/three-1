import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {createBox, createPlane} from "./components/Objects";

const Show = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75, // Field of view
            window.innerWidth / window.innerHeight, // Aspect ratio
            0.1, // Near clipping plane
            1000 // Far clipping plane
        );
        camera.position.set(0, 0, 5); // Set the initial camera position (z-axis)

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement); // Append the canvas to the div element

        // Light - Ambient Light
        const ambientLight = new THREE.AmbientLight(0x00ffff, 1); // Increase the intensity of the ambient light
        scene.add(ambientLight);

        // Light - Directional Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Increase the intensity of the directional light
        directionalLight.position.set(5, 5, 5);
        // scene.add(directionalLight);

        // Box (Cube)
        const box = createBox(3,3,3,0xadd8e6);
        scene.add(box);

        const light = new THREE.PointLight(0xffffff, .5, 5); // White light with intensity 1 and range of 5 units
        box.add(light);


        const plane = createPlane(40,40)
        scene.add(plane);

        // Axes Helpers
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        // Controls - Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // You can add animations or updates here if needed

            renderer.render(scene, camera);
        };

        animate();

        // Clean up
        return () => {
            renderer.dispose();
            canvasRef.current.removeChild(renderer.domElement); // Remove the canvas when the component unmounts
        };
    }, []);

    return <div ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default Show;
