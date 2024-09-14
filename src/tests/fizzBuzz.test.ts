import { fizzBuzz } from '../core/fizzBuzz';
describe('FizzBuzz', () => {
    it('returns number one as string for number one', () => {
        expect(fizzBuzz(1)).toBe('1')
    });
    it('returns number two as string for number two', () => {
        expect(fizzBuzz(2)).toBe('2')
    });
    it('returns fizz as string for number three', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    });
    it('returns buzz as string for number five', () => {
        expect( fizzBuzz( 5 ) ).toBe('buzz')
    });
    it('returns fizzbuzz as string for number fifteen', () => {
        expect( fizzBuzz( 15 ) ).toBe('fizzbuzz')
    });
    it('returns fizz for any number divisible by three', () => {
        expect( fizzBuzz( 9 ) ).toBe('fizz')
    });
});