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
import { useHistory } from "react-router-dom";
import log_out from "../assets/img/log-out.svg";
import "./Menu.css";

export const Menu = () => {
  const { state, dispatch } = useContext(AppContext);
  const history = useHistory();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/home")
  };
  return (
    // Menu desplegable para movil
    <IonMenu side="end" contentId="main">
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button onClick={() =>history.push("/home") } routerDirection="none">
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button onClick={() =>history.push("/shop") } routerDirection="none">
              <IonLabel>Shop</IonLabel>
            </IonItem>
            <IonItem button onClick={() =>history.push("/offers") } routerDirection="none">
              <IonLabel>Offers</IonLabel>
            </IonItem>
            <IonItem button onClick={() =>history.push("/contact") } routerDirection="none">
              <IonLabel>Contact</IonLabel>
            </IonItem>
            <IonItem button onClick={() =>history.push("/wardrobe") } routerDirection="none">
              <IonLabel>Wardrobe</IonLabel>
            </IonItem>

            {state.user ? (
              // Hay usuario logueado
              <>
                <IonItem button  routerDirection="none">
                  <img onClick={() =>history.push("/profile") }className="profile" src="https://thispersondoesnotexist.com/image" />
                </IonItem>
                <IonButton
                  onClick={logout}
                  routerDirection="none"
                >
                  <img src={log_out} className="logout" />
                </IonButton>
              </>
            ) : (
              // No hay usuario logueado
              <>
                <IonItem button onClick={() =>history.push("/login") } routerDirection="none">
                  <IonLabel>Sing in</IonLabel>
                </IonItem>
                <p>OR</p>
                <IonItem button onClick={() =>history.push("/register") } routerDirection="none">
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
