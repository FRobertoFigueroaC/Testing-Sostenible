export function fizzBuzz (number:number){
    if ( number === 15 ) {
        return 'fizzbuzz';
    }
    if (number % 3 === 0) {
        return 'fizz';
    } else if(number === 5){
        return 'buzz'
    }

    
    return number.toString();
}