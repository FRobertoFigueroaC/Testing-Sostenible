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
    it('returns buzz for any number divisible by five', () => {
        expect( fizzBuzz( 10 ) ).toBe('buzz')
    });
    it('returns fizzbuzz for any number divisible by fifteen', () => {
        expect( fizzBuzz( 45 ) ).toBe('fizzbuzz')
    });
    it('returns number as a string for any number that is not divisible by three or five and greater than two', () => {
        expect( fizzBuzz( 17 ) ).toBe('17')
    });
});