import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
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
      <h1>Mi armario</h1>
      {/* <section className="viewer-content"> */}
        <DM_3dview />
      {/* </section> */}
      </IonContent>
    </IonPage>
  );
};

export default WardRobe;
