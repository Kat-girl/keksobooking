const fragment = document.createDocumentFragment();
const templateSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

const addEscKeyDownHandler = () => document.addEventListener('keydown', onEscKeyDown);

const addScreenClickHandler = () => document.addEventListener('click', onScreenClick);

const createSuccessMessage = () => {
  fragment.append(templateSuccess);
  return fragment;
};

const showSuccessMessage = () => {
  document.querySelector('body').append(createSuccessMessage());
  templateSuccess.classList.remove('hidden');
  addEscKeyDownHandler();
  addScreenClickHandler();
};

const hideSuccessMessage = () => {
  templateSuccess.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
  document.removeEventListener('click', onScreenClick);
};

function onEscKeyDown (evt) {
  if (evt.key === 'Escape') {
    hideSuccessMessage();
  }
}

function onScreenClick () {
  hideSuccessMessage();
}

export {showSuccessMessage};
