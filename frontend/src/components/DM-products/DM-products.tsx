import React, {useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import axios from 'axios';
// import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton,
  IonList
} from '@ionic/react';
import "./DM-products.css";


const DM_products = (props: any) => {

    let prendas = {
        0:{
            "Slug": "shirt-8F2aN",
            "user": 1,
            "mark": "Sprinfield",
            "Price": "19'99",
            "Type": "trausers",
            "Size": "M",
            "Color": "black",
            "gender": "male",
            "season": "summer",
            "description": "Very nice shirt and confortable",
            "rating": 4
        },
        1:{
            "Slug": "shirt-8F2bN",
            "user": 1,
            "mark": "Sprinfield",
            "Price": "19'99",
            "Type": "shoes",
            "Size": "M",
            "Color": "black",
            "gender": "male",
            "season": "summer",
            "description": "Very nice shirt and confortable",
            "rating": 4
        },
        2:{
            "Slug": "shirt-8F2cN",
            "user": 1,
            "mark": "Sprinfield",
            "Price": "19'99",
            "Type": "t-shirt",
            "Size": "M",
            "Color": "black",
            "gender": "male",
            "season": "summer",
            "description": "Very nice shirt and confortable",
            "rating": 4
        },
        3:{
            "Slug": "shirt-8F2dN",
            "user": 1,
            "mark": "Sprinfield",
            "Price": "19'99",
            "Type": "shirt",
            "Size": "M",
            "Color": "black",
            "gender": "male",
            "season": "summer",
            "description": "Very nice shirt and confortable",
            "rating": 4
        },
        
    };

  return (
    <IonList className="eventsList">
        {/* {prendas.map((event, index) => (
        //   <ProductsPreview key={"event_" + index} event={event} />
        ))} */}


        {Object.values(prendas).map((prenda, index) =>{
            console.log("prenda ", prenda.Slug);
            console.log("index ", index)
        })}
      </IonList>


    // <IonCard className="products-list">
    //   <section className="card-content">
    //       <section className="card-content__images">
    //         <img src={image} alt="imagen" />
    //         <img src={image} alt="imagen" />
    //         <img src={image} alt="imagen" />
    //       </section>
        
    //     <section className="card-content__buttons">
    //         <IonButton routerLink={"/shop/id"} className="products-first">Nombre prenda</IonButton>
    //         <IonButton routerLink={"/shop/id"} className="products-second">Nombre prenda</IonButton>
    //         <IonButton routerLink={"/shop/id"} className="products-third">Nombre prenda</IonButton>
    //     </section>
        
        
  
          
    //   </section>
    // </IonCard>
  );

}


export default DM_products;