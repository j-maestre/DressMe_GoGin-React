import React, { useContext,useState } from "react";
// import { AppContext } from '../State';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonImg,
} from "@ionic/react";

import { IonModal, IonButton } from "@ionic/react";
import "./DM-Menu.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import icon from '../assets/img/dm-logo.png'


const DM_Menu = () =>{

    return (
        <IonMenu>
            <IonHeader>
                <IonToolbar>
                    <IonImg  className="IconMenu" src={icon} alt="icon" />
                    <IonLabel className="MenuTitle">Dress Me!</IonLabel>
                </IonToolbar>
            </IonHeader>
        </IonMenu>
    )
}

export default DM_Menu;