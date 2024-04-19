const submitButton = document.querySelector('.ad-form__submit');

function disableSubmitButton () {
  submitButton.disabled = true;
}

const sendForm = () => {
  disableSubmitButton();
  console.log('great success');
};

export {sendForm};
