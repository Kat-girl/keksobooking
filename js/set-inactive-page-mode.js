const adForm = document.querySelector('.ad-form');
const adFormHeader = document.querySelector('.ad-form-header');
const adFormElements = document.querySelectorAll('.ad-form__element');
const mapFilterForm = document.querySelector('.map__filters');
const mapFilters = document.querySelectorAll('.map__filter');
const mapFeatures = document.querySelector('.map__features');

const setInactiveFiltersMode = () => {
  mapFilterForm.classList.add('ad-form--disabled');
  for (const filter of mapFilters) {
    filter.disabled = true;
  }
  mapFeatures.disabled = true;
};

const setInactivePageMode = () => {
  adForm.classList.add('ad-form--disabled');
  adFormHeader.disabled = true;
  for (const element of adFormElements) {
    element.disabled = true;
  }

  setInactiveFiltersMode();
};

export {setInactivePageMode, setInactiveFiltersMode};


