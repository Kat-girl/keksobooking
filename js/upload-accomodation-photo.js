import {uploadPicture} from './util.js';

const photoInput = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');

uploadPicture(photoInput, photoPreview);
