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
  IonButton
} from "@ionic/react";
import React, { useContext, useState, useRef } from "react";
import { AppContext } from "../State";
import log_out from "../assets/img/log-out.svg";
import "./Menu.css";

export const Menu = () => {
  const { state, dispatch } = useContext(AppContext);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    // Menu desplegable para movil
    <IonMenu side="end" contentId="main">
      {/* <IonHeader> */}
      {/* <IonToolbar color="dark"> */}
      {/* <IonTitle>MENU</IonTitle> */}
      {/* </IonToolbar> */}
      {/* </IonHeader> */}
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

            {state.user ? (
              // Hay usuario logueado
              <>
                <IonItem button routerLink={"/profile"} routerDirection="none">
                  <img src="https://thispersondoesnotexist.com/image" />
                </IonItem>
                <IonButton
                  onClick={logout}
                  routerLink="/home"
                  routerDirection="none"
                >
                  <img src={log_out} className="logout" />
                </IonButton>
              </>
            ) : (
              // No hay usuario logueado
              <>
                <IonItem button routerLink={"/login"} routerDirection="none">
                  <IonLabel>Sing in</IonLabel>
                </IonItem>
                <p>OR</p>
                <IonItem button routerLink={"/register"} routerDirection="none">
                  <IonLabel>Sing up</IonLabel>
                </IonItem>
              </>
            )}
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
