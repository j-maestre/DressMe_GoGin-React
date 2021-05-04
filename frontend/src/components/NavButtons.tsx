import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../State";
import log_out from "../assets/img/log-out.svg";
import "./NavButtons.css";

export const NavButtons = () => {
  const { state, dispatch } = useContext(AppContext);
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
                routerLink="/home"
                className="logo"
              ></IonButton>
              <IonButton class="nav-button" routerLink={"/home"}>
                Home{" "}
              </IonButton>
              <IonButton class="nav-button" routerLink={"/shop"}>
                Shop{" "}
              </IonButton>
              <IonButton class="nav-button" routerLink={"/offers"}>
                Offers
              </IonButton>
              <IonButton class="nav-button" routerLink={"/contact"}>
                Contact
              </IonButton>
              <IonButton class="nav-button" routerLink={"/wardrobe"}>
                Wardrobe
              </IonButton>
              {state.user ? (
                // Hay usuario logueado
                <>
                  <img src="https://thispersondoesnotexist.com/image" className="profile"/>
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
                  <IonButton class="nav-button" routerLink={"/login"}>
                    Sing in
                  </IonButton>
                  <p>OR</p>
                  <IonButton class="nav-button" routerLink={"/register"}>
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
