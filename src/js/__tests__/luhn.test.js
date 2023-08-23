import luhnChk from '../luhn';

test('card should be valid', () => {
  const card = 4276160968686239;
  expect(luhnChk(card)).toBe(true);
});

test('card should not be valid', () => {
  const card = 5525632041217000;
  expect(luhnChk(card)).toBe(false);
});