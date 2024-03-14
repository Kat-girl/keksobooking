import {uploadPicture} from './util.js';

const avatarInput = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview').querySelector('img');

uploadPicture(avatarInput, avatarPreview);
