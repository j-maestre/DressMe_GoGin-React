import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../State";
import { prendas_service } from "../../Environment";
import { useHistory } from "react-router-dom";
import prendas from "../../assets/data/items.json";


import {
  IonCard,
  IonButton,
} from "@ionic/react";
import "./DM-visited.css";

const DM_visited = (props: any) => {
  const { state } = useContext(AppContext);
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With"
  );
  headers.append(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  headers.append("Transfer-Encoding", "chunked");

  useEffect(() => {


    fetch(prendas_service, {
      mode: "cors",
      // credentials: 'include',
      // referrerPolicy: "no-referrer-when-downgrade",
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
      // headers: headers
    })
      .then((res) => res.json())
      .then(
        (result) => {

          console.log(result);
        },
        (error) => {
          console.log("ERROR");
          console.log(error);
        }
      );
  }, []);

  let details = (prenda) => {
    dispatch({ type: "SET_PRENDA", value: prenda })
    history.push("/shop/" + prenda.Slug)
  };

  return (
    <IonCard className="visited-list">
      <section className="card-content">
        <section className="card-content__images">
          <img
            onClick={() => details(prendas.items[0])}
            src={prendas.items[0].image}
            alt="imagen"
          />
          <img
            onClick={() => details(prendas.items[1])}
            src={prendas.items[1].image}
            alt="imagen"
          />
          <img
            onClick={() => details(prendas.items[2])}
            src={prendas.items[2].image}
            alt="imagen"
          />
        </section>

        <section className="card-content__buttons">
          <IonButton
            onClick={() => details(prendas.items[0])}
            className="visited-first"
          >
            {prendas.items[0].Type}
          </IonButton>
          <IonButton
            onClick={() => details(prendas.items[1])}
            className="visited-second"
          >
            {prendas.items[1].Type}
          </IonButton>
          <IonButton
            onClick={() => details(prendas.items[2])}
            className="visited-third"
          >
            {prendas.items[2].Type}
          </IonButton>
        </section>
      </section>
    </IonCard>
  );
};

export default DM_visited;
