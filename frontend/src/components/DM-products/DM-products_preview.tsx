import React, { useEffect, useState, useContext } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonList,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../State";
import muestra from "../../assets/img/muestra.png";
import './DM-products_preview.css';

// type products_props = {
//   Slug: "";
//   user: 0;
//   mark: "";
//   Price: "";
//   Type: "";
//   Size: "";
//   Color: "";
//   gender: "";
//   season: "";
//   description: "";
//   rating: 0;
// };

const DM_products_preview: React.FC<any> = (props) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const history = useHistory();

  const product = props.products_props;
  const key = props.key;
  const PRODUCT_DETAILS_PATH = "/shop/";

  console.log("PRODUCT: ", product);
  console.log("key: ", key);

  let details = () =>{

    dispatch({ type: "SET_PRENDA", value: product })
    history.push(PRODUCT_DETAILS_PATH + product.Slug);

  }

  return (
    <IonCard className="product__card">
      <div onClick={() => details()}><img src={muestra} /></div>
      <p>{product.Type}</p>
      <p>{product.rating}</p>
    </IonCard>
  );
};
export default DM_products_preview;
