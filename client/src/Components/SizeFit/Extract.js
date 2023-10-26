import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import axios from 'axios'
import { MESH } from '../../config';
const renderer = new THREE.WebGLRenderer();

const MeshComponent = () => {
  const [objData, setObjData] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://api.digidoppel.com/ganymede/measurement',
    headers: {
      accept: '*/*',
      Authorization: `${MESH}`
    }
  };
  useEffect(() => {
    const fetchObjData = async () => {
      try {
        const response = await axios.request(options);
        const data = response.data;
        const url = data.items[0].download_preview_obj.url;
        const filename = data.items[0].filename;
        const response2 = await axios.get(url);
        setObjData(response2.data);
      } catch (error) {
        console.error('Error fetching OBJ data:', error);
      }
    };
    fetchObjData();
  }, []);

  useEffect(() => {
    if (objData) {
      const container = document.getElementById('canvas-container');
      container.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      const raycaster = new THREE.Raycaster();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const loader = new OBJLoader();
      const objMesh = loader.parse(objData);
      const light = new THREE.AmbientLight(0xffffff, 3);
      scene.add(light);
      const material = new THREE.MeshPhongMaterial({ color: 0xffddf, specular: 0x111111, shininess: 25,wireFrame: true });
      objMesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });

      scene.add(objMesh);

    let moved = false;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 50;
    controls.maxDistance = 100;

    controls.addEventListener('change', function () {
      moved = true;
    });

    window.addEventListener('pointerdown', function () {
      moved = false;
    });
    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

      animate();

      return () => {
      };
    }
  }, [objData]);

  return <div id = "canvas-container"  style={{
    width: '300px',   // Set the desired width
    height: '400px',  // Set the desired height
    border: '1px solid #ccc', // Add border for visibility
    position: 'relative', // Positioning for proper rendering
    // overflow: 'hidden'
  }} ref={(mount) => { mount && mount.appendChild(renderer.domElement) }} />;
};

export default MeshComponent;
