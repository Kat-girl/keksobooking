const adForm = document.querySelector('.ad-form');
const adFormHeader = document.querySelector('.ad-form-header');
const adFormElements = document.querySelectorAll('.ad-form__element');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const setActivePageMode = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormHeader.disabled = false;
  for (const element of adFormElements) {
    element.disabled = false;
  }

  mapFilterForm.classList.remove('ad-form--disabled');
  for (const filter of mapFilters) {
    filter.disabled = false;
  }
  mapFeatures.disabled = false;
};

export {setActivePageMode};
