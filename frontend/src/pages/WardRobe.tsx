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

  let merge_camiseta = (base, clothing) => {
    toDataURL(PATH_CAMISETA + clothing, function (dataUrl) {
      mergeImages([base, dataUrl]).then((new_image) =>
        dispatch({ type: "SET_BASE", value: new_image })
      );
    });
  };

  let merge = (base, clothing) => {
    toDataURL(PATH_PANTALONES + clothing, function (dataUrl) {
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
                  onClick={() => merge(state.base_model, pantalones_azules)}
                />
                <img
                  src={circle_green}
                  onClick={() => merge(state.base_model, pantalones_verdes)}
                />
                <img
                  src={circle_orange}
                  onClick={() => merge(state.base_model, pantalones_naranja)}
                />
                <img
                  src={circle_grey}
                  onClick={() => merge(state.base_model, pantalones_gris)}
                />
              </div>
              <div className="camiseta">
                <p>Camiseta</p>
                <img
                  src={circle_blue}
                  onClick={() => merge_camiseta(state.base_model, "azul.png")}
                />
                <img
                  src={circle_green}
                  onClick={() => merge_camiseta(state.base_model, "verde.png")}
                />
                <img
                  src={circle_orange}
                  onClick={() => merge_camiseta(state.base_model, "naranja.png")}
                />
                <img
                  src={circle_grey}
                  onClick={() => merge_camiseta(state.base_model, "gris.png")}
                />
              </div>
            </section>
            <h2>Mi ropa</h2>
            <div className="wardrobe__shop__container"></div>
            <span>-------</span>
            <p className="wardrobe__shop__total">Total: </p>
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
