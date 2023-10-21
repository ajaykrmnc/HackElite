import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import axios from 'axios'
const renderer = new THREE.WebGLRenderer();
const MeshComponent = () => {
  const [objData, setObjData] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://api.digidoppel.com/ganymede/measurement',
    headers: {
      accept: '*/*',
      Authorization: 'eyJraWQiOiJ6MHhcL1RPeUlTYkRyZGExYUVOQ0lxMFY3Z2E0SlpXWXlrWnJlV1BVUGhybz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiZ1N4WXUyVHYzOEV2SlJHUVVueXgtUSIsInN1YiI6IjhlYTU3YzM0LWU5OGEtNGI1Yi1iYTM3LWY5MjYxMDIwNjE1NyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV96SXlHUHFGcmwiLCJjb2duaXRvOnVzZXJuYW1lIjoiOGVhNTdjMzQtZTk4YS00YjViLWJhMzctZjkyNjEwMjA2MTU3IiwiYXVkIjoiYjhyYjNlaTFxZHY5b2tqa2h0MGpscm8yaSIsImV2ZW50X2lkIjoiMmViNzEzNjgtNzM2MS00OWQ4LWE0NjQtMGNjOTUwNzJiYTExIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2OTc3MjY1MDcsIm5hbWUiOiJBamF5IEt1bWFyIiwiZXhwIjoxNjk3NzY5NzA3LCJpYXQiOjE2OTc3MjY1MDcsImVtYWlsIjoiYWpheWtnNjkxN0BnbWFpbC5jb20ifQ.F9GiFZBz_XuZ-tDw_XduUUz-U5io3Lxxed70ic-Pp3cZFmk_q1qx8yaT6lK9fUB6d2AbU0SLLeUAfoLY0zwtyLmz50s3_ytNqfpDJw5NW_q761lhKqXiNp3sf1EruA4IuBH9y2Jt1fiLLdH_WOL42ygL9dZtikCk-VP48VMeUC4hq7BehS572hsHvwljZ2-mDFRD1BJZAtmTQ4HODz5hQ4fssWOKlaaggx5J8Pgd1CUDWgz2cZUX0BCbD6RfnS-RzGmBEddv5USePY32nl6JFyZLot-wgvr76DqC78fc8DLDBojsk1AaEzUKNf_DC7ivU-PZtBiOKKwBtM8JjMuD-g'
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
