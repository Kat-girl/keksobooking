
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
import './api.js';
import './show-error-message.js';
import './show-success-message.js';
import {getData} from './api.js';
import {showAlert} from './util.js';

getData((ads) => renderMarkers(ads), showAlert);

setUserFormSubmit(sendForm);

// cancelHideBaloon();
