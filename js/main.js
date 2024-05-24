
import './upload-avatar.js';
import './upload-accomodation-photo.js';
// import {setUserFormSubmit} from './send-data.js';
// import {sendForm} from './send-form.js';
import './render-similar-elements-layout.js';
import './validate-form.js';
import './map.js';
import './slider.js';

fetch('https://25.javascript.htmlacademy.pro/keksobooking/data')
  .then((response) => response.json())
  .then((ads) => {
    console.log(ads);
  });

// setUserFormSubmit(sendForm);
