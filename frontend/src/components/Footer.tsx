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
    IonFooter
  } from "@ionic/react";
  import React from "react";
  import './Footer.css';
  import instagram from "../assets/img/instagram.svg";
  import facebook from "../assets/img/facebook.svg";
  import pinterest from "../assets/img/pinterest.svg";
  import twitter from "../assets/img/twitter.svg";

  
  export const Footer = () => {
    return (
      <>
      <IonContent />
        <div className="footer">
        <IonToolbar color="dark">
            <section className="footer__content">
            <section className="footer__social">
                <IonTitle className="footer--title">Sigue conectado</IonTitle>
                <div className="footer__social__icons">
                <img src={instagram} />
                <img src={facebook} />
                <img src={pinterest} />
                <img src={twitter} />
                </div>
            </section>
            
            <section className="footer__author">
                <IonTitle className="footer--title">© 2021 Hecho por Xema</IonTitle>  
            </section>

            <section className="footer__contact">
                <IonTitle className="footer--title">¿Necesitas ayuda?</IonTitle>
                <p>633579841</p>
                <p>dressme@gmail.com</p>
            </section>
            </section>
            
        </IonToolbar>
        </div>
        {/* Por que coño tienes el footer arroba? */}
    </>
    );
  };
  