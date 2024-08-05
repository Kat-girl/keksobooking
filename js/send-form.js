import {showSuccessMessage} from './show-success-message.js';
import {resetForm} from './reset-form.js';

const sendForm = () => {
  resetForm();
  showSuccessMessage();
};

export {sendForm};
