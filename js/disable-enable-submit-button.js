const submitButton = document.querySelector('.ad-form__submit');

const disableSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};
const enableSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

export {disableSubmitButton, enableSubmitButton};
