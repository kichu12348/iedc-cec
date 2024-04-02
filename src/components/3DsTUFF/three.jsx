import React, { useEffect, useRef,useState } from "react";
import * as THREE from "three";
import styled from "styled-components";

const ThreeDScene = ({width}) => {
  const mountRef = useRef(null);



  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    // Set up the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff); // Set the background color to white

    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#ffffff"); // Set the background color to white

    // Set up the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a sphere with a mesh-like appearance
    const sphereGeometry = new THREE.SphereGeometry(width, 15, 15);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Add the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Mouse move event listener
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smoothly move the camera
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;

      camera.lookAt(scene.position); // Look at the center of the scene

      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [width]);

  return <RenderComponentSphere ref={mountRef} className="animate__animated animate__fadeInRight"/>;
};

export default ThreeDScene;

const RenderComponentSphere = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  rotate: 20deg;

  @media screen and (max-width: 768px) {
    left: 0;
    width: 100%;
  }
`;
