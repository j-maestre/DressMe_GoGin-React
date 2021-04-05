import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React from 'react';
import './Wardrobe.css';
import { NavButtons } from '../components/NavButtons';
import DM_3dview from '../components/DM-3dview/DM-3dview'

const WardRobe: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>PAGE TWO</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
          <h1 className="wardrobe-header">Mi armario</h1>
          <div className="wardrobe">
          <DM_3dview />
          
          <section className="wardrobe__shop">
            <h2>Mi ropa</h2>
            <div className="wardrobe__shop__container"></div>
            <span>-------</span>
            <p className="wardrobe__shop__total">Total: </p>
            <IonButton className="wardrobe__shop__buy">Comprar ahora</IonButton>
          </section>
        </div>
      
      </IonContent>
    </IonPage>
  );
};

export default WardRobe;
