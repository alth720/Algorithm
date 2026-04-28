function solution(a, b) {
    var isOddA = a % 2 === 1; 
    var isOddB = b % 2 === 1;
    
    if(isOddA && isOddB) {
        return a**2 + b**2;
    }
    else if(isOddA || isOddB) {
        return 2 * (a + b);
    }
    else {
        return Math.abs(a - b);
    }
    
    return console.log('err');
}