export function sum (numbers: number[]): number {
    return numbers.reduce((previous, current) => previous + current, 0)
}

export function average (numbers: number[]): number {
    if (numbers.length > 0) {
      return (sum(numbers)/ numbers.length)
    } return 0;
}