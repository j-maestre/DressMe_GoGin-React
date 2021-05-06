import React, {useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";
import image from "../../assets/img/muestra.png";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import prendas from '../../assets/data/items.json';
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
  const history = useHistory();
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('Access-Control-Allow-Headers','Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With')
  headers.append('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')
  headers.append('Transfer-Encoding','chunked')
  // headers.append('GET', 'POST', 'OPTIONS');

  console.log("HEADERS")
  console.log(headers)

  useEffect(() => {
    // axios.get(prendas_service, //proxy uri
    // {
    //   headers: headers
    // }).then(function (response) {
    //   console.log("OLE LOS CARACOLES")
    //   console.log(response);
    // });

    fetch(prendas_service, {  
      mode: 'cors',
      // credentials: 'include',
      // referrerPolicy: "no-referrer-when-downgrade",
      method: 'GET',
      headers: new Headers({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
      })
      // headers: headers
    }).then(res => res.json()).then(
        (result) => {
          console.log("OLE LOS CARACOLES");
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("ERROR")
          console.log(error)
          // setError(error);
        }
      )
  }, [])

  return (
    <IonCard className="visited-list">
      <section className="card-content">
          <section className="card-content__images">
            <img onClick={() =>history.push("/shop/"+prendas.items[0].Slug)} src={prendas.items[0].image} alt="imagen" />
            <img onClick={() =>history.push("/shop/"+prendas.items[1].Slug)} src={prendas.items[1].image} alt="imagen" />
            <img onClick={() =>history.push("/shop/"+prendas.items[2].Slug)} src={prendas.items[2].image} alt="imagen" />
          </section>
        
        <section className="card-content__buttons">
            <IonButton onClick={() =>history.push("/shop/"+prendas.items[0].Slug)} className="visited-first">{prendas.items[0].Type}</IonButton>
            <IonButton onClick={() =>history.push("/shop/"+prendas.items[1].Slug)} className="visited-second">{prendas.items[1].Type}</IonButton>
            <IonButton onClick={() =>history.push("/shop/"+prendas.items[2].Slug)} className="visited-third">{prendas.items[2].Type}</IonButton>
        </section>
        
        
  
          
      </section>
    </IonCard>
  );

}


export default DM_visited;