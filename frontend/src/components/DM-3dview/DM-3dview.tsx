import React, {useEffect, useState, useContext} from 'react';
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import "./DM-3dview.css";
import { IonContent } from '@ionic/react';

// 3dmodel

import {OBJModel} from 'react-3d-viewer';


// import {
//   IonCard,
//   IonCardContent,
//   IonCardSubtitle,
//   IonCardTitle,
//   IonIcon,
//   IonButton
// } from '@ionic/react';




const DM_3dview = (props: any) => {


  return (
    <div className="model-content">
      <OBJModel 
        width="400" height="400"  
        position={{x:0,y:-10,z:0}} 
        src="./person.obj"
        // zoom = "-3"
        onLoad={()=>{
          //state.isLoading=false
          console.log("OLE LOS CARACOLES")
        }}
        onProgress={xhr=>{
          //state.isLoading = true -> en un useState
          console.log("Cargando modelo 3d...")
        }}
      />
    </div>
  );

}


export default DM_3dview;