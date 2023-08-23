import paymentSysType from '../npsCheck';

test.each([
  ['mir bin 2***', '2000 0000 0000 0000', 'mir'],
  ['dinersclub bin 30**', '3000 0000 0000 0000', 'dinersclub'],
  ['dinersclub bin 36**', '3600 0000 0000 0000', 'dinersclub'],
  ['dinersclub bin 38**', '3800 0000 0000 0000', 'dinersclub'],
  ['americanExpress bin 34**', '3400 0000 0000 0000', 'americanExpress'],
  ['americanExpress bin 37**', '3700 0000 0000 0000', 'americanExpress'],
  ['jcb bin 35**', '3500 0000 0000 0000', 'jcb'],
  ['visaElectron bin 40**', '4000 0000 0000 0000', 'visaElectron'],
  ['visaElectron bin 41**', '4100 0000 0000 0000', 'visaElectron'],
  ['visaElectron bin 48**', '4800 0000 0000 0000', 'visaElectron'],
  ['visa bin 42**', '4200 0000 0000 0000', 'visa'],
  ['maestro bin 50**', '5000 0000 0000 0000', 'maestro'],
  ['mastercard bin 51**', '5100 0000 0000 0000', 'mastercard'],
  ['discover bin 60**', '6000 0000 0000 0000', 'discover'],
  ['unionPay bin 61**', '6100 0000 0000 0000', 'unionPay'],
  ['maestro bin 67**', '6700 0000 0000 0000', 'maestro'],
])(('it should be %s'), (_, value, result) => {
  expect(paymentSysType(value)).toBe(result);
});