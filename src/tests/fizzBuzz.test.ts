import { fizzBuzz } from '../core/fizzBuzz';
describe('FizzBuzz', () => {
    it('returns number one as string for number one', () => {
        expect(fizzBuzz(1)).toBe('1')
    });
});