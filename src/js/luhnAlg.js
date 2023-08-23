export default function luhnAlg(value) {
  let checksum = 0;
  const cardnumbers = value.split('').map(Number);
  for (const [index, num] of cardnumbers.entries()) {
    if (index % 2 === 0) {
      const doubleNumber = num * 2;

      if (doubleNumber > 9) {
        checksum += doubleNumber - 9;
      } else {
        checksum += doubleNumber;
      }

    } else {
      checksum += num;
    }
  }
  return checksum % 10 === 0;
}