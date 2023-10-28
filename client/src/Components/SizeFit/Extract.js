import React, { useEffect, useState,useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import axios from 'axios'
import { MESH } from '../../config';
import MeshSkeleton from 'Components/Loading/MeshLoading';
import './Extract.css'

const renderer = new THREE.WebGLRenderer();


const MeshComponent = ({width,height}) => {
  const containerRef = useRef();
  
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
      const container = containerRef.current;


      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 0, 100);

      const raycaster = new THREE.Raycaster();
      renderer.setSize(width,height);
      renderer.setClearColor(0xffffff); 
      container.appendChild(renderer.domElement);


      const loader = new OBJLoader();
      const objMesh = loader.parse(objData);
      objMesh.scale.set(0.4, 0.4, 0.4);
      objMesh.position.set(1, -30, 0);
      console.log('Current Position:', objMesh.position.x, objMesh.position.y, objMesh.position.z);

      const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Use MeshStandardMaterial for more realistic shading

      objMesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
  
      const light = new THREE.DirectionalLight(0xffffff, 1); // Add a directional light
      light.position.set(1, 1, 1).normalize();
      scene.add(light);  

      scene.add(objMesh);
      const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => renderer.render(scene, camera));

    const onWindowResize = () => {
      const aspect = width / height;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', onWindowResize, false);

    scene.add(objMesh);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Add this line to update the controls
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
    }
  }, [objData]);

  return <>
     {
       (objData) ? <div className = "Mesh" ref={containerRef} 

       /> : <MeshSkeleton/>
     }
  </>;
};

export default MeshComponent;
