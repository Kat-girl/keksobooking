import {pristineValidatePrice} from './validate-form.js';

const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');

const SLIDER_START = 5000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000
  },
  start: SLIDER_START,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      } else {
        return value.toFixed(1);
      }
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
  pristineValidatePrice();
});

price.addEventListener('input', () => {
  sliderElement.noUiSlider.set(price.value);
});

const setDefaultSliderPosition = () => {
  sliderElement.noUiSlider.set(SLIDER_START);
};

export {setDefaultSliderPosition};
