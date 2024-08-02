import {setDefaultSliderPosition} from './slider.js';
import {setDefaultMarkerPosition, hideBaloon} from './map.js';
import {showSuccessMessage} from './show-success-message.js';

const adForm = document.querySelector('.ad-form');

const resetForm = () => {
  adForm.reset();

  document.querySelector('.ad-form-header__preview').querySelector('img').src = 'img/muffin-grey.svg';
  document.querySelector('.ad-form__photo').style.backgroundImage = '';

  setDefaultSliderPosition();
  setDefaultMarkerPosition();
  // hideBaloon();
};

const sendForm = () => {
  resetForm();
  showSuccessMessage();
};

export {sendForm};
