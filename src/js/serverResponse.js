export default class CallResponses {
  constructor() {
    this.inputField = document.getElementById('validate-form__input');
    this.msg = document.querySelector('.validate-form__message');
    this.cardLogos = document.querySelectorAll('.cards__icon');
  }

  cardTypeFound(cardType) {
    const card = document.querySelector(`.${cardType}`);
    this.cardLogos.forEach((icon) => icon.firstChild.classList.remove('icon__active'));
    card.classList.remove('icon__inactive');
    card.classList.add('icon__active');
    this.inputField.classList.add('valid');
    this.msg.classList.add('message_valid');
    this.msg.textContent = 'Card is valid!';
  }

  cardTypeNotFound() {
    this.cardLogos.forEach((item) => item.classList.add('icon__inactive'));
    this.inputField.classList.add('invalid');
    this.msg.classList.add('message_invalid');
    this.msg.textContent = 'Card is not valid!';
  }

  inputClear() {
    this.cardLogos.forEach((item) => item.classList.remove('icon__inactive', 'icon__active'));
    this.inputField.classList.remove('valid', 'invalid');
    this.inputField.value = '';
    this.msg.classList.remove('message_valid', 'message_invalid');
    this.msg.textContent = '';
  }
}