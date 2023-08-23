import americanExpress from '../assets/american_express_curved.png';
import dinersclub from '../assets/dinersclub.png';
import discover from '../assets/discover.png';
import jcb from '../assets/jcb.png';
import mastercard from '../assets/mastercard_curved.png';
import mir from '../assets/Nspk-mir.png';
import visa from '../assets/visa_curved.png';
import unionPay from '../assets/UnionPay_logo.png';
import maestro from '../assets/maestro_curved.png';
import visaElectron from '../assets/visa_electron_curved.png';

export default class NPSicons {
  constructor() {
    this.paymentSystemList = {
      americanExpress,
      dinersclub,
      discover,
      jcb,
      mastercard,
      mir,
      visa,
      unionPay,
      maestro,
      visaElectron,
    };
  }

  iconSetter() {
    const container = document.querySelector('.container');
    /* eslint-disable-next-line */
    for (const [type, img] of Object.entries(this.paymentSystemList)) {
      const cardBox = document.createElement('div');
      cardBox.classList.add('cards__icon');
      const image = new Image();
      image.src = img;
      image.classList.add(`${type}`, 'icons');
      container.insertAdjacentElement('beforeend', cardBox).appendChild(image);
    }
  }
}