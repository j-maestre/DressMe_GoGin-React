import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonLabel } from '@ionic/react';
import React from 'react';
import './Shop.css';
import { NavButtons } from '../components/NavButtons';

const Shop: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>PAGE ONE</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <section className="shop-header">
          <IonLabel>Tienda</IonLabel>
        </section>
        <span className="line shop-line"></span>
      </IonContent>
    </IonPage>
  );
};

export default Shop;
