import mergeImages from 'merge-images';

let merge = (base, clothing, id) => {
    mergeImages([base, clothing])
    .then(new_image => document.getElementById(id).src = new_image);
}

export default merge;