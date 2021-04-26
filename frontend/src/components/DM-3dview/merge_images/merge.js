import mergeImages from 'merge-images';

// Images from 3dmodel
// import base from './model_base.png';
// import prueba from './ms-icon-310x310.png';


//Recibimos la imagen base,
//la imagen nueva y la id de la etiqueta <img/> a la que queremos añadir la nueva imagen

let merge = (base, clothing, id) => {
    console.log("Dentro del merge")
    console.log(base)
    mergeImages([base, clothing])
    .then(new_image => document.getElementById(id).src = new_image);
    
}

export default merge;