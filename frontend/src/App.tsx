import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import './App.css';
import * as THREE from "three";

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
import WardRobe from './pages/WardRobe';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (

      <IonApp>
        <IonReactRouter>
          <Menu/>
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
        {/* <div ref={ref => (this.mount = ref)} /> */}
      </IonApp>
      
      
    )
  }
}



// const App: React.FC = () => {


//   return(
//     <IonApp>
//         <IonReactRouter>
//           <Menu/>
//           <IonRouterOutlet  id="main">
//             <Route path="/home" component={Home} exact={true} />
//             <Route path="/shop" component={Shop} exact={true} />
//             {/* <Route path="/offers" component={PageTwo} exact={true} /> */}
//             {/* <Route path="/contact" component={PageTwo} exact={true} /> */}
//             <Route path="/wardrobe" component={WardRobe} exact={true} />
//             <Route path="/login" component={Login} exact={true} />
//             <Route path="/register" component={Register} exact={true} />
//             <Route exact path="/" render={() => <Redirect to="/home" />} />
//           </IonRouterOutlet>
//         </IonReactRouter>
//       </IonApp>
  
//   )}

export default App;
