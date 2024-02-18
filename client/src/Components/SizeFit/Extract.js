import React, { useEffect, useState,useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import img1 from "./texture.jpg"
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
    url: 'https://api.digidoppel.com/ganymede/asset/b1fef984-6e95-11ee-8dfd-5aed23c41842',
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
        const url = data.download_preview_obj.url;
        // const url = "https://s3.eu-central-1.amazonaws.com/mcme-prod-assets/mcme/47727403-41c2-4425-92b9-c74bffa08583/287da9c4-02de-412a-a852-c7ba741e3915?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAUOXRLEJTMWLKGAKM%2F20231029%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20231029T161103Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8c35d8b58a2442ec32870ad315d180ce8457b94873705f3f88b9b72ec7fa2fe4";
        const response2 = await axios.get(url);
        console.log(response2.data);
        setObjData((response2.data));
        console.log(typeof (response2.data));
      } catch (error) {
        console.log(MESH);
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

      // const material = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Use MeshStandardMaterial for more realistic shading

  
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(img1);

      const material = new THREE.MeshStandardMaterial({
        map: texture,
        color: 0xffffff,
      });
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
       (objData) ? <div style = {{border: '1px solid gray'}} ref={containerRef} /> : <MeshSkeleton/>
     }
  </>;
};

export default MeshComponent;
