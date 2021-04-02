import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonInput, IonItem } from '@ionic/react';
import React from 'react';
import './Login.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../assets/img/dm-logo.svg'

const Login: React.FC = () => {
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
        <section className="login-header">
            <img src={logo} alt="D" className="login-header__image"/>
            <IonTitle className="login-header__title">RESS ME!</IonTitle>
        </section>

        <section className="login-content">
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Nombre de usuario</IonLabel>
            <IonInput type="text" placeholder="Usuario" /> {/*onInput={e => setMaxPlayers(e.currentTarget.value)} */}
          </IonItem>
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Contraseña</IonLabel>
            <IonInput type="text" placeholder="Contraseña" /> {/*onInput={e => setMaxPlayers(e.currentTarget.value)} */}
          </IonItem>

          <IonButton>Entrar</IonButton>
        
        </section>
        

      </IonContent>
    </IonPage>
  );
};

export default Login;
