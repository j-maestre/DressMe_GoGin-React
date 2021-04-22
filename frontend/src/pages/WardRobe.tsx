import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import React, { useContext } from 'react';
import './Wardrobe.css';
import { NavButtons } from '../components/NavButtons';
import {DM_3dview} from '../components/DM-3dview/DM-3dview';
import { AppContext } from '../State'
// import merge from '../components/DM-3dview/merge_images/merge'

// import image_base from '../components/DM-3dview/images/model_base.png';
// import pantalones_verdes from '../components/DM-3dview/images/pantalones_verde_oscuro.png';
// import mergeImages from 'merge-images';
// import { State } from 'ionicons/dist/types/stencil-public-runtime';


const WardRobe: React.FC = () => {
  const { state } = useContext(AppContext);
  // console.log("VAmos a ver el state")
  // console.log(state.base_model)




//   let merge = (base, clothing, id) => {
//     mergeImages([base, clothing])
//     .then(new_image => document.querySelector('img').src = new_image);
// }

  //imagen base, imagenes que queremos superponer, id de la etiqueta img
  // merge(image_base,pantalones_verdes,'imagen_muestra');

  // document.getElementById('cambia_color').onclick = () =>{
  //   merge(image_base,pantalones_verdes,'imagen_muestra');
  // }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>PAGE TWO</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
          <h1 className="wardrobe-header">Mi armario</h1>
          <div className="wardrobe">
            {/* Coger la imagen base del state y pasarsela al componente */}


          
          
          <section className="wardrobe__shop">
            <h2>Mi ropa</h2>
            <div className="wardrobe__shop__container"></div>
            <span>-------</span>
            <p className="wardrobe__shop__total">Total: </p>
            <IonButton className="wardrobe__shop__buy">Comprar ahora</IonButton>
          </section>
          <div className="loading" id="js-loader"><div className="loader"></div></div>
  
          <div className="wrapper">
              {/* The canvas element is used to draw the 3D scene */}
            {/* <canvas ref = {this.canvas } id="c"></canvas> */}
          
          </div>
          <div id="prueba"></div>
          <DM_3dview image_base = {state.base_model}/>

          {/* <img src={image_base} id="imagen_muestra"/> */}
          
          {/* <IonButton onClick={() => merge(image_base,pantalones_verdes,'imagen_muestra')}>Cambiar color de pantalones</IonButton> */}
        </div>

      
      </IonContent>
    </IonPage>
  );
};

export default WardRobe;
