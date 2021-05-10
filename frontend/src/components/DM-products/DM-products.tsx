import React, { useEffect, useState, useContext } from "react";
import { IonList } from "@ionic/react";
import "./DM-products.css";
import prendas from "../../assets/data/items.json";
import DM_products_preview from "./DM-products_preview";

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
