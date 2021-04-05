import React, {useEffect, useState, useContext} from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import "./DM-3dview.css";
import { IonContent } from '@ionic/react';

// import ModelViewer from 'react-model-viewer';
import ModelViewer from 'react-3d-model-viewer';
import {DAEModel,DirectionLight } from 'react-3d-viewer';
import { ObjViewer } from 'react-obj-viewer'
// import axios from 'axios';
// import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

// import * as THREE from 'three';
// import { Scene } from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import ModelViewer from 'react-model-viewer';
// import ModelViewer from 'react-3d-model-viewer';


// 3dmodel
import {JSONModel} from 'react-3d-viewer';
import {OBJModel} from 'react-3d-viewer';
import person from '../../assets/3dmodel/person.json';
// import erenglb from '../../assets/3dmodel/eren.glb'
// import personobj from '../../assets/3dmodel/finalBaseMesh.obj';

declare global {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer':any;
        // 'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }

// import {
//   IonCard,
//   IonCardContent,
//   IonCardSubtitle,
//   IonCardTitle,
//   IonIcon,
//   IonButton
// } from '@ionic/react';




const DM_3dview = (props: any) => {

  const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';

    // const modelPath = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf';
  return (
    <div id="model-content">
      <ObjViewer 
        model="./finalBaseMesh.obj"
      />
      {/* <div>
        <DAEModel 
            src={'./src/lib/model/Ruins_dae.dae'}
            onLoad={()=>{
              // ...
            }}
          >
            <DirectionLight color={0xff00ff}/>
        </DAEModel>
    </div> */}
      {/* <IonContent> */}
        {/* <ModelViewer></ModelViewer> */}
      {/* <ModelViewer type="gtlf" src="eren.glb" /> */}
        {/* <model-viewer 
          // src="../../assets/3dmodel/eren.glb"
          src="eren.glb"
          alt="A 3D model of an astronaut" 
          auto-rotate camera-controls>
        </model-viewer> */}
      {/* </IonContent> */}
      
      {/* <div> */}
        {/* <OBJModel src="./a.obj" texPath="../../assets/img/finalBaseMesh.obj"/> */}
        {/* <JSONModel src={person} /> */}
      {/* </div> */}
         {/* <ModelViewer /> */}
        {/* <ModelViewer type="gtlf" /> */}
        {/* <model-viewer src="shared-assets/models/Astronaut.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer> */}
    </div>
  );

}


export default DM_3dview;