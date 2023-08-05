import * as THREE from "three";

export function createWebGLRender() {
    return  new THREE.WebGLRenderer({ antialias: true });
}