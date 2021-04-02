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
  IonButton
} from '@ionic/react';
import "./DM-visited.css";


const DM_visited = (props: any) => {

  // const { state } = useContext(AppContext);
  // const Props = props;
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');
  // headers.append('GET', 'POST', 'OPTIONS');

  useEffect(() => {
    axios.get(prendas_service, //proxy uri
    {
      headers: headers
    }).then(function (response) {
      console.log("OLE LOS CARACOLES")
      console.log(response);
    });

    // fetch(prendas_service, {  
    //   // mode: 'cors',
    //   credentials: 'include',
    //   method: 'GET',
    //   headers: headers
    // }).then(res => res.json()).then(
    //     (result) => {
    //       console.log("OLE LOS CARACOLES");
    //       console.log(result)
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       console.log("ERROR")
    //       console.log(error)
    //       // setError(error);
    //     }
    //   )
  }, [])

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