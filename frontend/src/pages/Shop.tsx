import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonLabel,
} from "@ionic/react";
import React, { useContext } from "react";
import "./Shop.css";
import { NavButtons } from "../components/NavButtons";
import DM_products from "../components/DM-products/DM-products";
import { AppContext } from "../State";

const Shop: React.FC = () => {
  const { state } = useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={state.theme}>
          {/* <IonTitle>PAGE ONE</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <section className="shop-header">
          <IonLabel>Tienda</IonLabel>
        </section>
        <span className="line shop-line"></span>
        <section className="shop__products">
          <DM_products />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Shop;
