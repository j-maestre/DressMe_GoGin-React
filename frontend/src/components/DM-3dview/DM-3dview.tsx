import React, {useEffect, useState, useContext, Component} from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import "./DM-3dview.css";
import { IonContent } from '@ionic/react';

// 3dmodel

import {OBJModel} from 'react-3d-viewer';
import * as THREE from "three";
import model_viewer from "./DM-3dview";

// import person from "../../../public/models/person.obj";

// /home/xema/Proyecto_TFG/Dress_Me/DressMe/frontend/public/models/person.obj


// import {
//   IonCard,
//   IonCardContent,
//   IonCardSubtitle,
//   IonCardTitle,
//   IonIcon,
//   IonButton
// } from '@ionic/react';




class DM_3dview extends Component {
  

  // componentDidMount() {
  //   // === THREE.JS CODE START ===
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   document.getElementById("model3d").appendChild( renderer.domElement );
  //   // document.body.appendChild( renderer.domElement );


  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame( animate );
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render( scene, camera );
  //   };
  //   animate();
  //   // === THREE.JS EXAMPLE CODE END ===
  // }
  // model_viewer.init();

  


  render(){
    console.log("A ver que tiene esto");
    // console.log(model_viewer)
    // model_viewer();

    
    
    // console.log(model_viewer)
    // model_viewer;
  return (
    <div id="model3d">

    <div className="loading" id="js-loader"><div className="loader"></div></div>
  
    <div className="wrapper">
        {/* <!-- The canvas element is used to draw the 3D scene --> */}
    <canvas id="c"></canvas>

    </div>
      <a target="_blank" href="https://tympanus.net/codrops/2019/10/14/how-to-create-an-interactive-3d-character-with-three-js/" className="tutorial-link">Follow the tutorial on Codrops</a>
    
      </div>
    // <div className="model-content">
    //   <OBJModel 
    //     width="400" height="400"  
    //     position={{x:0,y:-10,z:0}} 
    //     src="./models/person.obj"
    //     // zoom = "-3"
    //     onLoad={()=>{
    //       //state.isLoading=false
    //       console.log("OLE LOS CARACOLES")
    //     }}
    //     onProgress={xhr=>{
    //       //state.isLoading = true -> en un useState
    //       console.log("Cargando modelo 3d...")
    //     }}
    //   />
    // </div>
  )};

}


export default DM_3dview;