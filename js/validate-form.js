const adForm =  document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

// rooms capacity validation
const roomsSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

const roomsCapacity = {
  1: [1],
  2: [2, 1],
  3: [3, 2, 1],
  100: [0]
};

const roomText = {
  1: '1 комната',
  2: '2 комнаты',
  3: '3 комнаты',
  100: '100 комнат'
};

const capacityText = {
  1: 'для 1 гостя',
  2: 'для 2 гостей',
  3: 'для 3 гостей',
  0: 'не для гостей'
};

const validateRoomCapacity = () => roomsCapacity[roomsSelect.value].includes(parseInt(capacitySelect.value, 10));

const getCapacityErrorMessage = () => `Невозможно выбрать ${roomText[roomsSelect.value]} ${capacityText[capacitySelect.value]}`;

pristine.addValidator(roomsSelect,
  validateRoomCapacity,
  getCapacityErrorMessage);

const validateroomCapacity = () => {
  pristine.validate(roomsSelect);

  pristine.validate(capacitySelect);
};

roomsSelect.addEventListener('change', () => {
  validateroomCapacity();
});

capacitySelect.addEventListener('change', () => {
  validateroomCapacity();
});

// accomodation type - price validation
const accomodType = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const typeOptions = {
  'bungalow': 0,
  'flat': 1000,
  'hotel' : 3000,
  'house': 5000,
  'palace': 10000
};

const validatePrice = (value) => value >= typeOptions[accomodType.value] && value <= 100000;
const getPriceErrorMessage = () => `Цена должна быть в диапазоне от ${typeOptions[accomodType.value]} до 100000`;

pristine.addValidator(price, validatePrice, getPriceErrorMessage);

const pristineValidatePrice = () => pristine.validate(price);

accomodType.addEventListener('change', () => {
  price.setAttribute('min', `${typeOptions[accomodType.value]}`);
  price.setAttribute('data-pristine-minvalue-message', `Минимальная цена ${typeOptions[accomodType.value]}`);
  price.placeholder = `${typeOptions[accomodType.value]}`;
  pristineValidatePrice();
});

// time-in - time-out validation
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('ok');
  } else {
    console.log('nope');
  }
});

export {pristineValidatePrice};
