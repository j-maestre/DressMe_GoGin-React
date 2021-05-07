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
import star from "../../assets/img/star.svg";
import './DM-products_preview.css';


const DM_products_preview: React.FC<any> = (props) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const history = useHistory();

  const product = props.products_props;
  const key = props.key;
  const PRODUCT_DETAILS_PATH = "/shop/";

  let details = () =>{

    dispatch({ type: "SET_PRENDA", value: product })
    history.push(PRODUCT_DETAILS_PATH + product.Slug);

  }

  return (
    <IonCard className="product__card">
      <div onClick={() => details()}><img src={product.image} /></div>
      <p>{product.Type}</p>
      <p>{product.rating}<img className="star" src={star} /></p>
    </IonCard>
  );
};
export default DM_products_preview;
