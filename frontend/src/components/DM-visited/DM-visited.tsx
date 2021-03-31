import React from 'react';
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
// import { pinSharp, heartOutline, enterOutline } from 'ionicons/icons';

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonButton
} from '@ionic/react';
import "./DM-visited.css";


const DM_visited = (props: any) => {

  const Props = props;

  return (
    <IonCard className="visited-list">
      <section className="card-content">
          <section className="card-content__images">
            <img src={image} alt="imagen" />
            <img src={image} alt="imagen" />
            <img src={image} alt="imagen" />
          </section>
        
        <section className="card-content__buttons">
            <IonButton routerLink={"/shop/id"} className="visited-first">Nombre prenda</IonButton>
            <IonButton routerLink={"/shop/id"} className="visited-second">Nombre prenda</IonButton>
            <IonButton routerLink={"/shop/id"} className="visited-third">Nombre prenda</IonButton>
        </section>
        
        
  
          
      </section>
    </IonCard>
  );

}


export default DM_visited;