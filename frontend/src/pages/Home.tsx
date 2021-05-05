import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel } from '@ionic/react';
import React, { useContext } from 'react';
import './Home.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../assets/img/principal-home.png'
import DM_visited from '../components/DM-visited/DM-visited';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
import { AppContext } from '../State';
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="probando" color={state.theme}>
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
          <IonButton onClick={() =>history.push("/shop") } className="home-principal__content__buy-button">Comprar</IonButton>
        </div>
        <span className="home-principal__subcontent">
          <IonLabel className="home-principal__subcontent__title">Envios gratis en toda España</IonLabel>
        </span>

        <section className="body-content">
          <IonLabel className="body-content__title">TODO EL AÑO</IonLabel>
          <span className="line body-line "></span>
          <IonLabel className="body-content__subtitle">Los más vistos</IonLabel>
        </section>

        <section className="body-content__visited">
          <DM_visited/>
        </section>

      </IonContent>
    </IonPage>
  );
};

export default Home;
