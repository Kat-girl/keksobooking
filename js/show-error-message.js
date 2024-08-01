const fragment = document.createDocumentFragment();
const templateError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const closeButton = templateError.querySelector('.error__button');

const addCloseButtonClickHandler = () => closeButton.addEventListener('click', onCloseButtonClick);

const addEscKeyDownHandler = () => document.addEventListener('keydown', onEscKeyDown);

const addScreenClickHandler = () => document.addEventListener('click', onScreenClick);

const createErrorMessage = () => {
  fragment.append(templateError);
  return fragment;
};

const showErrorMessage = () => {
  document.querySelector('body').append(createErrorMessage());
  templateError.classList.remove('hidden');
  addCloseButtonClickHandler();
  addEscKeyDownHandler();
  addScreenClickHandler();
};

const hideErrorMessage = () => {
  templateError.classList.add('hidden');
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscKeyDown);
  document.removeEventListener('click', onScreenClick);
};

function onCloseButtonClick () {
  hideErrorMessage();
}

function onEscKeyDown (evt) {
  if (evt.key === 'Escape') {
    hideErrorMessage();
  }
}

function onScreenClick () {
  hideErrorMessage();
}

export {showErrorMessage};
