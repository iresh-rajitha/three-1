import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {createText} from "./components/Objects";
import {createPerspectiveCamera} from "./components/Cameras";
import {createWebGLRender} from "./components/WebGLRender";

const Show = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xdddddd)
        // Camera
        const camera = createPerspectiveCamera()
        camera.position.set(0, 2, 8); // Set the initial camera position (z-axis)

        // Renderer
        const renderer = createWebGLRender();
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement); // Append the canvas to the div element

        // Light - Ambient Light
        const ambientLight = new THREE.AmbientLight(0x00ffff, 1); // Increase the intensity of the ambient light
        scene.add(ambientLight);

        // Light - Directional Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Increase the intensity of the directional light
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Box (Cube)
        const box = createText("Iresh");
        scene.add(box);

        // const light = new THREE.PointLight(0xffffff, .5, 5); // White light with intensity 1 and range of 5 units
        // box.add(light);

        // ground Plane
        // const plane = createPlane(40,40 , 0xffffff , true)
        // scene.add(plane);
        // plane.rotateX(Math.PI/2);
        // plane.position.y = -10;

        // Grid Helper
        const  grid = new THREE.GridHelper(20,20);
        scene.add(grid);

        // Axes Helpers
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        // Controls - Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // new comment

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
