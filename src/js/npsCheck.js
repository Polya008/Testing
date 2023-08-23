import popup from './popup';

export default function paymentSysType(value) {
  if (value) {
    if (value[0] === '2') {
      return 'mir';
    }
    if ((value[0] === '3') && ((value[1] === '0') || (value[1] === '6') || (value[1] === '8'))) {
      return 'dinersclub';
    }
    if ((value[0] === '3') && ((value[1] === '4') || (value[1] === '7'))) {
      return 'americanExpress';
    }
    if ((value[0] === '3') && (value[1] === '5')) {
      return 'jcb';
    }
    if ((value[0] === '4') && ((value[1] === '8') || (value[1] === '1') || (value[1] === '0'))) {
      return 'visaElectron';
    }
    if ((value[0] === '4') && ((value[1] !== '8') || (value[1] !== '1') || (value[1] !== '0'))) {
      return 'visa';
    }
    if ((value[0] === '5') && (value[1] === '0')) {
      return 'maestro';
    }
    if ((value[0] === '5') && (value[1] !== '0')) {
      return 'mastercard';
    }
    if ((value[0] === '6') && (value[1] === '0')) {
      return 'discover';
    }
    if ((value[0] === '6') && (value[1] === '7')) {
      return 'maestro';
    }
    if ((value[0] === '6') && ((value[1] !== '7') || (value[1] !== '0'))) {
      return 'unionPay';
    }
  }
  return popup();
}