import { toCamelCase } from '../core/camelCase';
describe('Camel case coverter (Pasacal)', () => {
    // it('allows empty text ', () => {
    //     expect(toCamelCase('')).toBe('')
    // });
    // it('allows capitalized word ', () => {
    //     expect(toCamelCase('Foo')).toBe('Foo')
    // });
    // it('joins the capitalized words that are separated by spaces', () => {
    //     expect(toCamelCase('Foo Bar')).toBe('FooBar')
    // });
    // it('joins the capitalized words that are separated by hypens', () => {
    //     expect(toCamelCase('Foo_Bar-Foo')).toBe('FooBarFoo')
    // });
    it('Capitalize the first character of a word', () => {
        expect(toCamelCase('foo')).toBe('Foo')
    });
    it('Capitalize the first character of a each word', () => {
        expect(toCamelCase('foo_bar_foo')).toBe('FooBarFoo')
    });
});