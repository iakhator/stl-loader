import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
  const renderer = new THREE.WebGLRenderer();

  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement ); 
  
  camera.position.set(0, 0, 10);
  
  const stlLoader = new STLLoader();
  
  stlLoader.load('https://rushlabel.s3.us-east-2.amazonaws.com/models/stl/marketing_concept_v18.stl', function ( geometry ) {
    console.log(geometry)
    // var material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: true });
    var mesh = new THREE.Mesh(geometry);
    
    scene.add(mesh);
    renderer.render( scene, camera );
  });
  
  
})()
