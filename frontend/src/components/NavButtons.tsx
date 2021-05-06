import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../State";
import { useHistory } from "react-router-dom";
import log_out from "../assets/img/log-out.svg";
import "./NavButtons.css";

export const NavButtons = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);

  //Aqui especificamos si estamos en mobile o desktop
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/home")
  };

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  // console.log(mQuery.matches);

  return (
    <header>
      <div>
        {mQuery && !mQuery.matches ? (
          <IonMenuButton />
        ) : (
          // Menu desktop
          <>
            <div className="menu-container">
              <IonButton
                class="nav-button"
                onClick={() =>history.push("/home") }
                className="logo"

              ></IonButton>
              <IonButton class="nav-button" onClick={() =>history.push("/home") }>
                Home{" "}
              </IonButton>
              <IonButton class="nav-button" onClick={() =>history.push("/shop") }>
                Shop{" "}
              </IonButton>
              <IonButton class="nav-button" onClick={() =>history.push("/offers") }>
                Offers
              </IonButton>
              <IonButton class="nav-button" onClick={() =>history.push("/contact") }>
                Contact
              </IonButton>
              <IonButton class="nav-button" onClick={() =>history.push("/wardrobe") }>
                Wardrobe
              </IonButton>
              {state.user ? (
                // Hay usuario logueado
                <>
                  <img src="https://thispersondoesnotexist.com/image" className="profile"/>
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
                  <IonButton class="nav-button" onClick={() =>history.push("/login") }>
                    Sing in
                  </IonButton>
                  <p>OR</p>
                  <IonButton class="nav-button" onClick={() =>history.push("/register") }>
                    Sing up
                  </IonButton>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};
