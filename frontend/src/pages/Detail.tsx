import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonLabel,
  IonButton,
} from "@ionic/react";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Detail.css";
import { NavButtons } from "../components/NavButtons";
import { AppContext } from "../State";
import cami_naranja from "./camiseta_na_3d.png";
import mergeImages from "merge-images";

const Detail: React.FC = () => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  let prenda = state.prenda;

  let dressme = () => {
    toDataURL(prenda.image3d, function (dataUrl) {
      merge(state.base_model, dataUrl);
    });
    //Cambiamos el path de la prenda
    console.log("TIPO DE PRENDA");
    console.log(prenda.Type);
    switch (prenda.Type) {
      case "shirt":
        dispatch({ type: "SET_PATH_CAMISETA", value: prenda.path });
        break;
      case "trausers":
        dispatch({ type: "SET_PATH_PANTALONES", value: prenda.path });
        break;
    }

    history.push("/wardrobe");
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

  let merge = (base, clothing) => {
    mergeImages([base, clothing]).then((new_image) =>
      dispatch({ type: "SET_BASE", value: new_image })
    );
  };
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
        <section className="details">
          <img src={prenda.image} />

          <section className="details__caracteristics">
            <h2>{prenda.description}</h2>
            <h3>{prenda.Price}€</h3>
            <span className="line details-line"></span>
            <h3>Sizes avaliable</h3>
            <ul>
              <li>{prenda.Size}</li>
            </ul>
            <IonButton
              onClick={() => dressme()}
              className="details__caracteristics_dressme--btn"
            >
              Dress Me!
            </IonButton>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Detail;
