import * as THREE from 'three';
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";

// Function to create a box
export function createBox(width, height, depth, color = 0xadd8e6) {
    const boxGeometry = new THREE.BoxGeometry(width, height, depth);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: color });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    return box;
}

// Function to create a sphere
export function createSphere(radius, segments = 32, color = 0xff0000) {
    const sphereGeometry = new THREE.SphereGeometry(radius, segments, segments);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: color });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere;
}

// Function to create a cylinder
export function createCylinder(radiusTop, radiusBottom, height, radialSegments = 32, color = 0x00ff00) {
    const cylinderGeometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
    const cylinderMaterial = new THREE.MeshBasicMaterial({ color: color });
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    return cylinder;
}

// Function to create a cone
export function createCone(radius, height, radialSegments = 32, color = 0xffff00) {
    const coneGeometry = new THREE.ConeGeometry(radius, height, radialSegments);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: color });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    return cone;
}

// Function to create a plane
export function createPlane(width, height, color = 0x0000ff) {
    const planeGeometry = new THREE.PlaneGeometry(width, height);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    return plane;
}

// Function to create a torus
export function createTorus(radius, tube, radialSegments = 32, tubularSegments = 12, color = 0xff00ff) {
    const torusGeometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
    const torusMaterial = new THREE.MeshBasicMaterial({ color: color });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    return torus;
}

// Function to create a tetrahedron
export function createTetrahedron(radius, color = 0x8b008b) {
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(radius);
    const tetrahedronMaterial = new THREE.MeshBasicMaterial({ color: color });
    const tetrahedron = new THREE.Mesh(tetrahedronGeometry, tetrahedronMaterial);
    return tetrahedron;
}

// Function to create a dodecahedron
export function createDodecahedron(radius, color = 0xffa500) {
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(radius);
    const dodecahedronMaterial = new THREE.MeshBasicMaterial({ color: color });
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    return dodecahedron;
}

// Function to create an octahedron
export function createOctahedron(radius, color = 0x006400) {
    const octahedronGeometry = new THREE.OctahedronGeometry(radius);
    const octahedronMaterial = new THREE.MeshBasicMaterial({ color: color });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    return octahedron;
}

// Function to create an icosahedron
export function createIcosahedron(radius, color = 0x20b2aa) {
    const icosahedronGeometry = new THREE.IcosahedronGeometry(radius);
    const icosahedronMaterial = new THREE.MeshBasicMaterial({ color: color });
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
    return icosahedron;
}

// Function to create a ring
export function createRing(innerRadius, outerRadius, thetaSegments = 32, color = 0xff1493) {
    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: color });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    return ring;
}

// Function to create a circle
export function createCircle(radius, segments = 32, color = 0x00ffff) {
    const circleGeometry = new THREE.CircleGeometry(radius, segments);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: color });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    return circle;
}

// Function to create a text
// export function createText(text, size = 1, height = 0.2, color = 0xffffff) {
//     const textGeometry = new TextGeometry(text, {
//         font: new THREE.Font(THREE.FontUtils.generateShapes(THREE.FontUtils.loadFace("helvetiker"))),
//         size: size,
//         height: height,
//     });
//     const textMaterial = new THREE.MeshPhongMaterial({ color: color });
//     const textMesh = new THREE.Mesh(textGeometry, textMaterial);
//     return textMesh;
// }
// }

// Function to create a lathe
export function createLathe(points, segments = 12, color = 0x4169e1) {
    const latheGeometry = new THREE.LatheGeometry(points, segments);
    const latheMaterial = new THREE.MeshBasicMaterial({ color: color });
    const lathe = new THREE.Mesh(latheGeometry, latheMaterial);
    return lathe;
}

// Function to create an extruded shape
export function createExtrudeShape(shape, extrudeSettings, color = 0xff4500) {
    const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const extrudeMaterial = new THREE.MeshBasicMaterial({ color: color });
    const extrudeShape = new THREE.Mesh(extrudeGeometry, extrudeMaterial);
    return extrudeShape;
}
