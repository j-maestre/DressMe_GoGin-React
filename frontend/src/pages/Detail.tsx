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
import muestra from "../assets/img/muestra.png";


const Detail: React.FC = () => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  let prenda = state.prenda;

  console.log("PRENDA DETAILS");
  console.log(prenda);
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
          <img src={muestra} />

          <section className="details__caracteristics">
            <h2>{prenda.description}</h2>
            <h3>{prenda.Price}€</h3>
            <span className="line details-line"></span>
            <h3>Sizes avaliable</h3>
            <ul>
              <li>{prenda.Size}</li>
            </ul>
            <IonButton onClick={() =>history.push("/wardrobe") } className="details__caracteristics_dressme--btn">Dress Me!</IonButton>
          </section>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Detail;
