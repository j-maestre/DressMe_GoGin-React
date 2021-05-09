import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import "./Wardrobe.css";
import { NavButtons } from "../components/NavButtons";
import { DM_3dview } from "../components/DM-3dview/DM-3dview";
import { AppContext } from "../State";
import mergeImages from "merge-images";

import circle_blue from "../components/DM-3dview/images/circle-solid_blue.svg";
import circle_green from "../components/DM-3dview/images/circle-solid_green.svg";
import circle_orange from "../components/DM-3dview/images/circle-solid_orange.svg";
import circle_grey from "../components/DM-3dview/images/circle-solid_grey.svg";

import pantalones_verdes from "../components/DM-3dview/images/pantalones_verdes.png";
import pantalones_azules from "../components/DM-3dview/images/pantalones_azules.png";
import pantalones_naranja from "../components/DM-3dview/images/pantalones_naranja.png";
import pantalones_gris from "../components/DM-3dview/images/pantalones_gris.png";

const WardRobe: React.FC = () => {
  // componentWillUnmount(){

  // }
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);

  const PATH_CAMISETA = state.path_camiseta;
  const PATH_PANTALONES = state.path_pantalones;

  console.log("A ve rque hay en el armario...................");
  console.log(state.prendas);

  let totalPrice = 0;
  if (state.prendas.camiseta.Price) {
    totalPrice += state.prendas.camiseta.Price;
  }
  if (state.prendas.pantalon.Price) {
    totalPrice += state.prendas.pantalon.Price;
  }
  if (state.prendas.zapatos.Price) {
    totalPrice += state.prendas.zapatos.Price;
  }

  let merge = (base, clothing, path) => {
    toDataURL(path + clothing, function (dataUrl) {
      mergeImages([base, dataUrl]).then((new_image) =>
        dispatch({ type: "SET_BASE", value: new_image })
      );
    });
  };

  // Convert image to base64
  let toDataURL = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={state.theme}>
          {/* <IonTitle>PAGE TWO</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 className="wardrobe-header">Mi armario</h1>
        <div className="wardrobe">
          <section className="wardrobe__shop">
            <section className="colors">
              <div className="pantalones">
                <p>Pantalones</p>
                <img
                  src={circle_blue}
                  onClick={() =>
                    merge(state.base_model, "azul.png", PATH_PANTALONES)
                  }
                />
                <img
                  src={circle_green}
                  onClick={() =>
                    merge(state.base_model, "verde.png", PATH_PANTALONES)
                  }
                />
                <img
                  src={circle_orange}
                  onClick={() =>
                    merge(state.base_model, "naranja.png", PATH_PANTALONES)
                  }
                />
                <img
                  src={circle_grey}
                  onClick={() =>
                    merge(state.base_model, "gris.png", PATH_PANTALONES)
                  }
                />
              </div>
              <div className="camiseta">
                <p>Camiseta</p>
                <img
                  src={circle_blue}
                  onClick={() =>
                    merge(state.base_model, "azul.png", PATH_CAMISETA)
                  }
                />
                <img
                  src={circle_green}
                  onClick={() =>
                    merge(state.base_model, "verde.png", PATH_CAMISETA)
                  }
                />
                <img
                  src={circle_orange}
                  onClick={() =>
                    merge(state.base_model, "naranja.png", PATH_CAMISETA)
                  }
                />
                <img
                  src={circle_grey}
                  onClick={() =>
                    merge(state.base_model, "gris.png", PATH_CAMISETA)
                  }
                />
              </div>
            </section>
            <h2>Mi ropa</h2>
            <section className="wardrobe__shop__container">
              <div className="wardrobe__shop__container__camiseta">
                <p>{state.prendas.camiseta.Type}</p>
                <p>{state.prendas.camiseta.mark}</p>
                <p>{state.prendas.camiseta.Price}</p>
              </div>
              <div className="wardrobe__shop__container__pantalon">
                <p>{state.prendas.pantalon.Type}</p>
                <p>{state.prendas.pantalon.mark}</p>
                <p>{state.prendas.pantalon.Price}</p>
              </div>
            </section>
            <span className="line wardrobe--line"></span>
            <section className=""></section>
            <h3 className="wardrobe__shop__total">Total: {totalPrice}€</h3>

            <IonButton className="wardrobe__shop__buy">Comprar ahora</IonButton>
          </section>
        </div>
        <section className="wardrobe__model">
          <div id="prueba"></div>

          <DM_3dview image_base={state.base_model} />
        </section>
      </IonContent>
    </IonPage>
  );
};

export default WardRobe;
