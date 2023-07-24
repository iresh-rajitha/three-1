import * as THREE from 'three';

// Function to create an ambient light
export function createAmbientLight(color = 0xffffff, intensity = 1) {
    return new THREE.AmbientLight(color, intensity);
}

// Function to create a directional light
export function createDirectionalLight(color = 0xffffff, intensity = 1) {
    return new THREE.DirectionalLight(color, intensity);
}

// Function to create a point light
export function createPointLight(color = 0xffffff, intensity = 1, distance = 0, decay = 1) {
    return new THREE.PointLight(color, intensity, distance, decay);
}

// Function to create a spot light
export function createSpotLight(color = 0xffffff, intensity = 1, distance = 0, angle = Math.PI / 3, penumbra = 0, decay = 1) {
    return new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
}

// Function to create a hemisphere light
export function createHemisphereLight(skyColor = 0xffffff, groundColor = 0x000000, intensity = 1) {
    return new THREE.HemisphereLight(skyColor, groundColor, intensity);
}

// Function to create a rect area light
export function createRectAreaLight(color = 0xffffff, intensity = 1, width = 10, height = 10) {
    return new THREE.RectAreaLight(color, intensity, width, height);
}

// Function to create a point light helper
export function createPointLightHelper(light, size = 1) {
    const pointLightHelper = new THREE.PointLightHelper(light, size);
    return pointLightHelper;
}

// Function to create a spot light helper
export function createSpotLightHelper(light) {
    const spotLightHelper = new THREE.SpotLightHelper(light);
    return spotLightHelper;
}


// examples
// const ambientLight = createAmbientLight(0xffffff, 0.5);
// const directionalLight = createDirectionalLight(0xffffff, 1);
// const pointLight = createPointLight(0xffffff, 1, 10);
// const spotLight = createSpotLight(0xffffff, 1, 10, Math.PI / 4);
// const hemisphereLight = createHemisphereLight(0x00ff00, 0xff0000, 0.5);
// const rectAreaLight = createRectAreaLight(0xff00ff, 2, 5, 5);