import {setDefaultSliderPosition} from './slider.js';
import {setDefaultMarkerPosition, hideBaloon} from './map.js';
import {showSuccessMessage} from './show-success-message.js';

const submitButton = document.querySelector('.ad-form__submit');
const adForm = document.querySelector('.ad-form');

function disableSubmitButton () {
  submitButton.disabled = true;
}

const resetForm = () => {
  adForm.reset();

  document.querySelector('.ad-form-header__preview').querySelector('img').src = 'img/muffin-grey.svg';
  document.querySelector('.ad-form__photo').style.backgroundImage = '';

  setDefaultSliderPosition();
  setDefaultMarkerPosition();
  hideBaloon();
};

const sendForm = () => {
  // disableSubmitButton();
  resetForm();
  console.log('great success');
  showSuccessMessage();
};

export {sendForm};
