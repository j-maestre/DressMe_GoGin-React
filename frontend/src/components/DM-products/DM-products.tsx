import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import image from "../../assets/img/muestra.png";
// import { AppContext } from "../../State";
// import { prendas_service } from "../../Environment";
// import axios from 'axios';
// import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonList,
} from "@ionic/react";

import "./DM-products.css";
import prendas from "../../assets/data/items.json";
import DM_products_preview from "./DM-products_preview";
// import prenda_model from './DM-prenda_model';

const DM_products = (props: any) => {
  return (
    <IonList className="eventsList">
      {Object.values(prendas.items).map((prenda, index) => (
        <DM_products_preview key={index} products_props={prenda} />
      ))}
    </IonList>
  );
};

export default DM_products;
