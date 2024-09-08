
import {average, sum} from '../stats';
import * as statsAsync from '../statsAsync';

describe("Syncronous tests", () => {

    it("should sum the elements of a numeric array", () => {    
        const result = sum([1,2,3]);
        const expected = 6;
        expect(expected).toBe(result);
    });
    
    it("Should calculate the average of the elements of a numeric array", () => {
        const result = average( [ 1, 2, 3 ] );
        const expected = 2;
        
        expect( expected ).toBe( result );
    });

    it("Averga should return 0 if array is empty", () => {
        const result = average( [] );
        const expected = 0;

        expect( expected ).toBe( result );
    });
});

describe( "Asyncronous tests", () => {

    it( "should sum the elements of a numeric array async", async() => {
        const result = await statsAsync.sum( [ 1, 2, 3 ] );
        const expected = 6;
        expect( expected ).toBe( result );
    } );
    
    it( "Should calculate the average of the elements of a numeric array async", async() => {
        const result = await statsAsync.average( [ 1, 2, 3 ] );
        const expected = 2;
    
        expect( expected ).toBe( result );
    } );
});




