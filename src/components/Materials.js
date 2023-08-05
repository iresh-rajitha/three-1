import * as THREE from "three";

export function createMaterial(materialType, options) {
    switch (materialType.toLowerCase()) {
        case "basic":
            return createMeshBasicMaterial(options);
        case "lambert":
            return createMeshLambertMaterial(options);
        case "phong":
            return createMeshPhongMaterial(options);
        case "standard":
            return createMeshStandardMaterial(options);
        case "physical":
            return createMeshPhysicalMaterial(options);
        case "toon":
            return createMeshToonMaterial(options);
        case "points":
            return createPointsMaterial(options);
        case "linebasic":
            return createLineBasicMaterial(options);
        case "linedashed":
            return createLineDashedMaterial(options);
        default:
            throw new Error("Invalid material type: " + materialType);
    }
}

export function createMeshBasicMaterial(options) {
    return new THREE.MeshBasicMaterial(options);
}

export function createMeshLambertMaterial(options) {
    return new THREE.MeshLambertMaterial(options);
}

export function createMeshPhongMaterial(options) {
    return new THREE.MeshPhongMaterial(options);
}

export function createMeshStandardMaterial(options) {
    return new THREE.MeshStandardMaterial(options);
}

export function createMeshPhysicalMaterial(options) {
    return new THREE.MeshPhysicalMaterial(options);
}

export function createMeshToonMaterial(options) {
    return new THREE.MeshToonMaterial(options);
}

export function createPointsMaterial(options) {
    return new THREE.PointsMaterial(options);
}

export function createLineBasicMaterial(options) {
    return new THREE.LineBasicMaterial(options);
}

export function createLineDashedMaterial(options) {
    return new THREE.LineDashedMaterial(options);
}
