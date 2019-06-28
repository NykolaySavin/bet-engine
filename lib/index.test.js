import Calculator from './index';
const calculator =new Calculator();
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.input(3)).toBe(3);
});