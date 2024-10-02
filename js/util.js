// источник: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max = 1) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const getRandomFloatInclusive = (min, max = 1, float) => {
  const numbr = Math.random() * (max - min + 1) + min;
  return +numbr.toFixed(float);
};

const getRandomArrayElement = (arr) => getRandomIntInclusive(0, arr.length - 1);

const getUniqueNumber = (min, max) => {
  let counter = min;
  return function () {
    while (counter <= max) {
      return counter ++;
    }
  };
};

const getNewRandomArray = (arr) => arr.slice().sort(() => Math.random() - 0.5).slice(0, getRandomArrayElement(arr));

const uploadPicture = (input, preview) => {
  input.addEventListener('change', () => {
    const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      if (preview.tagName === 'IMG') {
        preview.src = URL.createObjectURL(file);
      } else {
        preview.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
        preview.style.backgroundSize = '100%';
        preview.style.backgroundPosition = 'center center';
        preview.style.backgroundRepeat = 'no-repeat';
      }
    }
  });
};

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.backgroundColor = '#ff0000';
  alertContainer.style.padding = '20px';
  alertContainer.style.fontSize = '25px';
  alertContainer.style.fontWeight = 700;
  alertContainer.style.textAlign = 'center';
  alertContainer.textContent = message;
  document.querySelector('body').append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomIntInclusive, getRandomFloatInclusive, getRandomArrayElement, getUniqueNumber, uploadPicture, getNewRandomArray, showAlert, debounce};
