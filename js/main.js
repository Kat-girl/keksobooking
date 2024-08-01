
import './upload-avatar.js';
import './upload-accomodation-photo.js';
// import {setUserFormSubmit} from './send-data.js';
import {sendForm} from './send-form.js';
import './render-similar-elements-layout.js';
// import './validate-form.js';
import {setUserFormSubmit} from './validate-form.js';
import './map.js';
import './slider.js';
import {renderMarkers} from './map.js';
import './get-data.js';
import './show-error-message.js';

fetch(
  'https://25.javascript.htmlacademy.pro/keksobooking/data',
)
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  })
  .then((ads) => {
    console.log(ads);
    renderMarkers(ads);
  });

setUserFormSubmit(sendForm);
