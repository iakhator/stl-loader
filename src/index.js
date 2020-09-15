import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement ); 
  
  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  const loader = new STLLoader();

  loader.load( 'https://threejs.org/examples/models/stl/binary/pr2_head_pan.stl', function ( geometry ) {
    var material = new THREE.MeshLambertMaterial( { opacity: 1, vertexColors: true } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, 0, 0);
    scene.add( mesh );
  });
  
  camera.position.z = 5;
  // camera.position.y = 100;

  function animate() {
    // requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }

  animate()
})()
