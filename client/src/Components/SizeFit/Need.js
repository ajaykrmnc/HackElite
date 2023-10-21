import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const renderer = new THREE.WebGLRenderer({ antialias: true });
const MyComponent = () => {
  useEffect(() => {
    let scene, camera;
    let mesh;
    let raycaster;
    let line;

    const intersection = {
      intersects: false,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(),
    };
    const mouse = new THREE.Vector2();
    const intersects = [];

    const textureLoader = new THREE.TextureLoader();
    const decalDiffuse = textureLoader.load('decal-diffuse.png');
    decalDiffuse.encoding = THREE.sRGBEncoding;
    const decalNormal = textureLoader.load('decal-normal.jpg');

    const decalMaterial = new THREE.MeshPhongMaterial({
      specular: 0x444444,
      map: decalDiffuse,
      normalMap: decalNormal,
      normalScale: new THREE.Vector2(1, 1),
      shininess: 30,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -4,
      wireframe: false,
    });

    const decals = [];
    let mouseHelper;
    const position = new THREE.Vector3();
    const orientation = new THREE.Euler();
    const size = new THREE.Vector3(10, 10, 10);

    const params = {
      minScale: 10,
      maxScale: 20,
      rotate: true,
      clear: function () {
        removeDecals();
      },
    };

    function init() {
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('container').appendChild(renderer.domElement);


      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 120;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 50;
      controls.maxDistance = 200;

      scene.add(new THREE.AmbientLight(0x666666));

      const dirLight1 = new THREE.DirectionalLight(0xffddcc, 3);
      dirLight1.position.set(1, 0.75, 0.5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xccccff, 3);
      dirLight2.position.set(-1, 0.75, -0.5);
      scene.add(dirLight2);

      const geometry = new THREE.BufferGeometry();
      geometry.setFromPoints([
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]);

      line = new THREE.Line(geometry, new THREE.LineBasicMaterial());
      scene.add(line);

      loadLeePerrySmith();

      raycaster = new THREE.Raycaster();

      mouseHelper = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 10),
        new THREE.MeshNormalMaterial()
      );
      mouseHelper.visible = false;
      scene.add(mouseHelper);

      window.addEventListener('resize', onWindowResize);

      let moved = false;

      controls.addEventListener('change', function () {
        moved = true;
      });

      window.addEventListener('pointerdown', function () {
        moved = false;
      });

      window.addEventListener('pointerup', function (event) {
        if (moved === false) {
          checkIntersection(event.clientX, event.clientY);

          if (intersection.intersects) shoot();
        }
      });

      window.addEventListener('pointermove', onPointerMove);

      function onPointerMove(event) {
        if (event.isPrimary) {
          checkIntersection(event.clientX, event.clientY);
        }
      }

      function checkIntersection(x, y) {
        if (mesh === undefined) return;

        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = -(y / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        raycaster.intersectObject(mesh, false, intersects);

        if (intersects.length > 0) {
          const p = intersects[0].point;
          mouseHelper.position.copy(p);
          intersection.point.copy(p);

          const n = intersects[0].face.normal.clone();
          n.transformDirection(mesh.matrixWorld);
          n.multiplyScalar(10);
          n.add(intersects[0].point);

          intersection.normal.copy(intersects[0].face.normal);
          mouseHelper.lookAt(n);

          const positions = line.geometry.attributes.position;
          positions.setXYZ(0, p.x, p.y, p.z);
          positions.setXYZ(1, n.x, n.y, n.z);
          positions.needsUpdate = true;

          intersection.intersects = true;

          intersects.length = 0;
        } else {
          intersection.intersects = false;
        }
      }

      const gui = new GUI();

      gui.add(params, 'minScale', 1, 30);
      gui.add(params, 'maxScale', 1, 30);
      gui.add(params, 'rotate');
      gui.add(params, 'clear');
      gui.open();
    }

    function loadLeePerrySmith() {
      
      const specularMap = textureLoader.load(
        'Map-SPEC.jpg'
      );
      const normalMap = textureLoader.load(
        'Infinite-Level_02_Tangent_SmoothUV.jpg'
      );
      const map = textureLoader.load('path_to_your_texture.jpg', function (texture) {
        texture.TextureEncoding = THREE.SRGBColorSpace;
      });
      const loader = new GLTFLoader();

      loader.load('LeePerrySmith.glb', function (
        gltf
      ) {
        mesh = gltf.scene.children[0];
        mesh.material = new THREE.MeshPhongMaterial({
          specular: 0x111111,
          map: map,
          specularMap: specularMap,
          normalMap: normalMap,
          shininess: 25,
        });

        scene.add(mesh);
        mesh.scale.set(10, 10, 10);
      });
    }

    function shoot() {
        //   
    }

    function removeDecals() {
      decals.forEach(function (d) {
        scene.remove(d);
      });

      decals.length = 0;
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);

    }

    init();
    animate();

    return () => {
      // Clean up code (if any) when the component is unmounted
    };
  }, []);

  return <div id="container" />;
};

export default MyComponent;
