import sum from '../src/sum';

describe('testing sum function', () => {
  // Checks the result of sum against a constant value
  test('1 + 2 is equal to 3', () => expect(sum(1, 2)).toBe(3));
  // Checks the result of sum against a stored output snapshout
  test('2 + 2 is equal to 4', () => expect(sum(2, 2)).toMatchSnapshot());
});
