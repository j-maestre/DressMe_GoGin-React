import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

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
            {/* <p>Home</p> */}
            {/* <p>shop</p> */}
            {/* <p>Offers</p> */}
            {/* <p>Contact</p> */}
            {/* <p>WardRobe</p> */}
            <IonButton class="nav-button" routerLink="/home" className="logo"></IonButton>
            <IonButton class="nav-button" routerLink={"/home"}>Home </IonButton>
            <IonButton class="nav-button" routerLink={"/shop"}>Shop </IonButton>
            <IonButton class="nav-button" routerLink={"/offers"}>Offers</IonButton>
            <IonButton class="nav-button" routerLink={"/contact"}>Contact</IonButton>
            <IonButton class="nav-button" routerLink={"/wardrobe"}>Wardrobe</IonButton>
            <IonButton class="nav-button" routerLink={"/register"}>Sing in or Sing up</IonButton>
          </div>
        </>
      )}
    </div>
    </header>
  );
};


