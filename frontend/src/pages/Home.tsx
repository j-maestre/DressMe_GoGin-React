import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel } from '@ionic/react';
import React from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../assets/img/principal-home.png'

const Home: React.FC = () => {
  return (
    <IonPage className="probando2">
      <IonHeader>
        <IonToolbar className="probando">
          {/* <IonTitle>{logo}</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* TODO */}
        <img src={logo} alt="Logo" className="home-principal"/>
        <div className="home-principal__content">
          <IonLabel className="home-principal__content__title">Otoño & Invierno</IonLabel>
          <IonButton routerLink={"/shop"} className="home-principal__content__buy-button">Comprar</IonButton>
        </div>
        <span className="home-principal__subcontent">
          <IonLabel>Envios gratis en toda España</IonLabel>
        </span>

        <section className="body-content">
          <IonTitle>Todo el año</IonTitle>
          <IonLabel>Los infaltables</IonLabel>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
