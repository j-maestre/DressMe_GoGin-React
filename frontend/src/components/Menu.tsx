import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";
import './Menu.css';

export const Menu = () => {
  return (
    // Menu desplegable para movil
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/shop"} routerDirection="none">
              <IonLabel>Shop</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/offers"} routerDirection="none">
              <IonLabel>Offers</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/contact"} routerDirection="none">
              <IonLabel>Contact</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/wardrobe"} routerDirection="none">
              <IonLabel>Wardrobe</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
