import React, { Component,useContext, useEffect } from "react";
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import './App.css';
// import * as THREE from "three";
import { AppContextProvider, AppContext } from "./State";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Shop from './pages/Shop';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import WardRobe from './pages/WardRobe';
import Login from './pages/Login';
import Register from './pages/Register';


import base_model from './components/DM-3dview/images/model_base.png';

const Autoload = () => {

  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {

    dispatch({type:'SET_STATE',value:JSON.parse(window.localStorage.getItem("persistedState"))});

    toDataURL(base_model, function(dataUrl) {
      // console.log('RESULT:', dataUrl)

      dispatch({type: 'SET_BASE',value: dataUrl}) 
      return dataUrl;
    })

    

    // console.log("IMAGE BASE")
    // console.log(image_base)
    
    
  },[]);

  
  return (<></>);
}


// Convert image to base64
  let toDataURL = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }
  
  


const App: React.FC = () => {


  return(
    <AppContextProvider>
    <IonApp>
      <Autoload/>
        <IonReactRouter>
          <Menu/>
          <Footer />
          <IonRouterOutlet  id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/shop" component={Shop} exact={true} />
            {/* <Route path="/offers" component={PageTwo} exact={true} /> */}
            {/* <Route path="/contact" component={PageTwo} exact={true} /> */}
            <Route path="/wardrobe" component={WardRobe} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          
        </IonReactRouter>
      </IonApp>
      </AppContextProvider>
  
  )}

export default App;
