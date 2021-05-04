import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonLabel } from '@ionic/react';
import React, { useContext } from 'react';
// import './Shop.css';
import { NavButtons } from '../components/NavButtons';
import { AppContext } from '../State';

const Detail: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={state.theme}>
          {/* <IonTitle>PAGE ONE</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          ole los caracoles

        {/* <section className="shop-header">
          <IonLabel>Tienda</IonLabel>
        </section>
        <span className="line shop-line"></span>
        <DM_products /> */}
      </IonContent>
    </IonPage>
  );
};

export default Detail;
